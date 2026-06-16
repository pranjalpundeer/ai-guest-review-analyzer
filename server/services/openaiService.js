/**
 * OpenAI Service
 * Handles all interactions with the OpenAI API
 */

const OpenAI = require('openai');

// Initialize OpenAI client
const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set in environment variables');
  }
  return new OpenAI({ apiKey });
};

/**
 * Analyzes a single guest review using OpenAI
 * @param {string} review - The guest review text
 * @returns {Promise<Object>} Parsed analysis result
 */
const analyzeReview = async (review) => {
  const client = getOpenAIClient();

  const systemPrompt = `You are an expert hospitality analyst for a luxury Himalayan hotel brand.
Your job is to analyze guest reviews and return ONLY a valid JSON object — no markdown, no explanation, no code fences.

Rules:
- "sentiment" must be exactly one of: "Positive", "Neutral", "Negative"
- "theme" must be exactly one of: "Food", "Host", "Location", "Cleanliness", "Value", "Experience"
- "response" must be a single professional management reply sentence (max 25 words)
- Return ONLY the JSON object, nothing else

JSON format:
{
  "review": "<the original review text>",
  "sentiment": "<Positive|Neutral|Negative>",
  "theme": "<Food|Host|Location|Cleanliness|Value|Experience>",
  "response": "<professional one-line management reply>"
}`;

  const userPrompt = `Analyze this guest review and return only valid JSON:

"${review}"`;

  const completion = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.3,
    max_tokens: 300,
  });

  const rawText = completion.choices[0]?.message?.content?.trim();
  if (!rawText) {
    throw new Error('Empty response from OpenAI');
  }

  // Strip markdown fences if model includes them despite instructions
  const cleaned = rawText.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (e) {
    throw new Error(`Failed to parse OpenAI response as JSON: ${cleaned}`);
  }

  // Validate required fields
  const validSentiments = ['Positive', 'Neutral', 'Negative'];
  const validThemes = ['Food', 'Host', 'Location', 'Cleanliness', 'Value', 'Experience'];

  if (!validSentiments.includes(parsed.sentiment)) {
    parsed.sentiment = 'Neutral'; // fallback
  }
  if (!validThemes.includes(parsed.theme)) {
    parsed.theme = 'Experience'; // fallback
  }

  return {
    review: review,
    sentiment: parsed.sentiment,
    theme: parsed.theme,
    response: parsed.response || 'Thank you for your valuable feedback. We will use it to improve our services.',
  };
};

/**
 * Analyzes multiple reviews in parallel
 * @param {string[]} reviews - Array of review strings
 * @returns {Promise<Object[]>} Array of analysis results
 */
const analyzeReviews = async (reviews) => {
  // Process reviews in parallel with a concurrency limit of 5
  const CONCURRENCY = 5;
  const results = [];

  for (let i = 0; i < reviews.length; i += CONCURRENCY) {
    const batch = reviews.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map((review) => analyzeReview(review))
    );
    results.push(...batchResults);
  }

  return results;
};

module.exports = { analyzeReview, analyzeReviews };

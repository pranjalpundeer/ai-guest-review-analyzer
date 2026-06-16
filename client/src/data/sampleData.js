/**
 * Sample data for Dashboard and Home preview (no backend required)
 */

export const SAMPLE_REVIEWS = [
  { id: 1, review: 'Amazing food and very friendly staff. Highly recommend!',          sentiment: 'Positive', theme: 'Food',        response: 'Thank you for your kind words! We are thrilled our team made your stay memorable.' },
  { id: 2, review: 'Rooms were clean but breakfast was average and nothing special.',   sentiment: 'Neutral',  theme: 'Food',        response: 'We appreciate your balanced feedback and will work to elevate our breakfast offerings.' },
  { id: 3, review: 'The washroom was dirty and service was slow throughout our stay.',  sentiment: 'Negative', theme: 'Cleanliness', response: 'We sincerely apologise and have addressed these concerns with our housekeeping team immediately.' },
  { id: 4, review: 'Stunning mountain views from our room. Absolutely breathtaking!',  sentiment: 'Positive', theme: 'Location',    response: 'We are so glad you enjoyed the Himalayan vistas — nature truly is the best host!' },
  { id: 5, review: 'Price was high for what we received. Mediocre value overall.',     sentiment: 'Negative', theme: 'Value',       response: 'Your feedback on value is noted — we are reviewing our pricing and packages accordingly.' },
  { id: 6, review: 'Our host Ramesh was incredibly helpful and made us feel welcome.', sentiment: 'Positive', theme: 'Host',        response: 'We will pass your warm praise to Ramesh — this is exactly the spirit we strive for.' },
  { id: 7, review: 'Location is perfect — right in the heart of the valley.',          sentiment: 'Positive', theme: 'Location',    response: 'We are proud of our location and delighted it added to your experience!' },
  { id: 8, review: 'Bed was comfortable but the WiFi was very poor and kept dropping.',sentiment: 'Neutral',  theme: 'Experience',  response: 'Thank you — we have upgraded our connectivity and look forward to impressing you next visit.' },
];

export const FEATURES = [
  { icon: '🧠', title: 'Sentiment Analysis',     description: 'Automatically classify each review as Positive, Neutral, or Negative using GPT-3.5.' },
  { icon: '🏷️', title: 'Theme Detection',        description: 'Detect the primary topic — Food, Location, Cleanliness, Value, Host, or Experience.' },
  { icon: '✍️', title: 'AI Response Generator',  description: 'Generate professional management replies tailored to each guest\'s specific feedback.' },
  { icon: '📊', title: 'Dashboard Analytics',    description: 'Visualise sentiment distribution and theme trends across all your reviews at a glance.' },
  { icon: '⚡', title: 'Batch Processing',        description: 'Analyse up to 50 reviews simultaneously with parallel processing for speed.' },
  { icon: '📥', title: 'CSV Export',             description: 'Download your full analysis as a CSV for reporting, sharing, or further processing.' },
];

export const TECH_STACK = [
  { name: 'React 19',     icon: '⚛️', desc: 'Modern UI library'        },
  { name: 'Tailwind CSS', icon: '🎨', desc: 'Utility-first styling'     },
  { name: 'Express.js',   icon: '🚀', desc: 'Node.js backend API'       },
  { name: 'OpenAI API',   icon: '🤖', desc: 'GPT-3.5 for NLP analysis'  },
  { name: 'Recharts',     icon: '📈', desc: 'Data visualisation'        },
  { name: 'Vite',         icon: '⚡', desc: 'Lightning-fast build tool' },
];

export const FUTURE_SCOPE = [
  { icon: '🌐', title: 'Multi-language Support',   desc: 'Analyse reviews in Hindi, Nepali, and 10+ languages.' },
  { icon: '📧', title: 'Email Integration',        desc: 'Automatically send AI responses directly to guests.' },
  { icon: '🔗', title: 'OTA Integration',          desc: 'Connect to Booking.com, TripAdvisor, and Airbnb feeds.' },
  { icon: '📱', title: 'Mobile Application',       desc: 'Native iOS and Android apps for on-the-go management.' },
  { icon: '🏨', title: 'Multi-property Dashboard', desc: 'Manage reviews across multiple properties from one portal.' },
  { icon: '🔔', title: 'Real-time Alerts',         desc: 'Instant notifications for negative reviews requiring action.' },
];

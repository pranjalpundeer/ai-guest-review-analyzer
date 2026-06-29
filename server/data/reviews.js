// in-memory store - resets when server restarts
// seeded with some sample himalayan hotel reviews so the dashboard isn't empty on first load

let reviews = [
  {
    id: "r1",
    guestName: "Ananya Sharma",
    rating: 5,
    sentiment: "Positive",
    theme: "Hospitality",
    review: "The staff at this resort went above and beyond. Every morning the team greeted us by name and the mountain views from our room were absolutely breathtaking. Will definitely come back next year.",
    response: "Thank you so much Ananya! We are thrilled to hear our team made you feel so welcome. We look forward to welcoming you back!",
    date: "2025-11-12",
  },
  {
    id: "r2",
    guestName: "Rohan Mehta",
    rating: 2,
    sentiment: "Negative",
    theme: "Food",
    review: "Disappointed with the food quality. The buffet options were very limited and the food was cold most of the time. Expected much better for the price we paid.",
    response: "We sincerely apologize for the experience Rohan. Your feedback about the buffet has been shared with our kitchen team and we are working on improvements.",
    date: "2025-12-01",
  },
  {
    id: "r3",
    guestName: "Priya Nair",
    rating: 4,
    sentiment: "Positive",
    theme: "Cleanliness",
    review: "Rooms were spotless and the housekeeping team was very prompt. Loved the attention to detail with the flower arrangements. The bathroom amenities were also top notch.",
    response: "Thank you Priya! Our housekeeping team takes great pride in their work and your kind words will mean a lot to them.",
    date: "2025-12-10",
  },
  {
    id: "r4",
    guestName: "James Okafor",
    rating: 3,
    sentiment: "Neutral",
    theme: "Location",
    review: "The location is beautiful and peaceful but getting to the nearest town took about 45 minutes on mountain roads. Good for people who want to disconnect completely. Not ideal if you need city amenities.",
    response: "Thank you for this balanced feedback James. We do mention our remote location on our website and offer a daily shuttle to town. We will make this more prominent.",
    date: "2026-01-05",
  },
  {
    id: "r5",
    guestName: "Kavya Reddy",
    rating: 5,
    sentiment: "Positive",
    theme: "Adventure",
    review: "The trekking packages offered by the resort were phenomenal. Our guide Deepak was knowledgeable and made sure everyone was safe. Saw three Himalayan peaks on a clear day!",
    response: "What a wonderful experience! Deepak and our adventure team love sharing the mountains with guests. Thank you for the glowing review Kavya.",
    date: "2026-01-20",
  },
  {
    id: "r6",
    guestName: "Michael Torres",
    rating: 1,
    sentiment: "Negative",
    theme: "Service",
    review: "Waited over 40 minutes for room service and when it arrived the order was completely wrong. Called the front desk three times and no one answered. Very frustrating experience.",
    response: "We are deeply sorry for this experience Michael. This is not the standard we hold ourselves to. We would like to offer you a complimentary stay to make this right.",
    date: "2026-02-08",
  },
  {
    id: "r7",
    guestName: "Sneha Joshi",
    rating: 4,
    sentiment: "Positive",
    theme: "Spa",
    review: "The Ayurvedic spa treatments were absolutely divine. The therapists were trained professionals and the herbal oils used were authentic. Left feeling completely rejuvenated.",
    response: "So glad you enjoyed our spa Sneha! Our therapists trained in Kerala and we source our oils directly from certified Ayurvedic farms.",
    date: "2026-02-14",
  },
  {
    id: "r8",
    guestName: "David Kim",
    rating: 3,
    sentiment: "Neutral",
    theme: "Value",
    review: "Nice place overall but felt a bit overpriced for what was offered. The room was comfortable but the wifi was spotty throughout our stay. Would consider returning if they improve connectivity.",
    response: "Thank you David. We have been upgrading our network infrastructure and the improvements should be visible by April. We appreciate your patience.",
    date: "2026-03-01",
  },
];

// counter for generating new IDs
let idCounter = reviews.length + 1;

function generateId() {
  return "r" + Date.now() + idCounter++;
}

module.exports = { reviews, generateId };

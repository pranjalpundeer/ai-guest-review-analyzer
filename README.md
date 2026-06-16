# 🏔️ Himalayan Guest Experience Intelligence Platform

**AI-Powered Guest Review Analysis for Hospitality Businesses**

Analyze guest reviews instantly using OpenAI. Paste reviews, get sentiment classification, theme detection, and professional response suggestions — all in one dashboard.

---

## Features

- **AI Review Analysis** — Sentiment (Positive / Neutral / Negative) + Theme classification
- **Dashboard Statistics** — Summary cards with counts and percentages
- **Pie Chart** — Visual sentiment distribution via Recharts
- **Filterable Table** — Search, filter by sentiment/theme, sort results
- **Copy Responses** — One-click copy for each AI-generated management reply
- **CSV Export** — Download all results as a spreadsheet
- **Dark Mode** — Full light/dark theme toggle
- **Example Reviews** — Load sample data instantly
- **Error Handling** — Friendly messages for all failure cases
- **Responsive Design** — Works on mobile and desktop

---

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 18 (Vite), Tailwind CSS, Recharts, Axios |
| Backend  | Node.js, Express.js, OpenAI SDK v4  |
| AI       | GPT-3.5-turbo via OpenAI API        |

---

## Folder Structure

```
himalayan-review-platform/
│
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx           # Header with mountain motif
│   │   │   ├── ReviewInput.jsx    # Textarea + action buttons
│   │   │   ├── StatsCards.jsx     # Summary dashboard cards
│   │   │   ├── SentimentChart.jsx # Recharts pie chart
│   │   │   ├── ResultsTable.jsx   # Filterable results table
│   │   │   ├── LoadingOverlay.jsx # Spinner while analyzing
│   │   │   └── ErrorBanner.jsx    # Error display component
│   │   ├── utils/
│   │   │   ├── api.js             # Axios API client
│   │   │   └── exportCSV.js       # CSV download utility
│   │   ├── App.jsx                # Root component
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Tailwind + custom styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                    # Express backend
│   ├── routes/
│   │   └── analyze.js             # Route definitions
│   ├── controllers/
│   │   └── analyzeController.js   # Request handlers
│   ├── services/
│   │   └── openaiService.js       # OpenAI API integration
│   ├── index.js                   # Express server entry
│   ├── .env                       # Your secrets (create this)
│   ├── .env.example               # Template for secrets
│   └── package.json
│
├── .gitignore
├── package.json               # Root scripts (concurrently)
└── README.md
```

---

## Quick Start

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd himalayan-review-platform

# Install all dependencies (root + client + server)
npm run install:all
```

Or manually:

```bash
# Root
npm install

# Client
cd client && npm install

# Server
cd ../server && npm install
```

### 2. Configure Environment

Create `server/.env`:

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
PORT=5000
CLIENT_URL=http://localhost:5173
```

> Get your API key from: https://platform.openai.com/api-keys

### 3. Run the Application

```bash
# Run both frontend and backend simultaneously (from root)
npm run dev
```

Or start each separately:

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

Open your browser: **http://localhost:5173**

---

## API Reference

### POST `/api/analyze`

Analyze one or more guest reviews.

**Request:**
```json
{
  "reviews": [
    "Amazing food and very friendly staff!",
    "Rooms were clean but breakfast was average.",
    "The washroom was dirty and service was slow."
  ]
}
```

**Response:**
```json
{
  "results": [
    {
      "review": "Amazing food and very friendly staff!",
      "sentiment": "Positive",
      "theme": "Food",
      "response": "Thank you for your wonderful feedback. We look forward to welcoming you again."
    },
    {
      "review": "Rooms were clean but breakfast was average.",
      "sentiment": "Neutral",
      "theme": "Food",
      "response": "We appreciate your balanced feedback and will work to enhance our breakfast offerings."
    },
    {
      "review": "The washroom was dirty and service was slow.",
      "sentiment": "Negative",
      "theme": "Cleanliness",
      "response": "We sincerely apologize for this experience and have addressed the matter with our housekeeping team."
    }
  ]
}
```

**Sentiment values:** `Positive` | `Neutral` | `Negative`

**Theme values:** `Food` | `Host` | `Location` | `Cleanliness` | `Value` | `Experience`

---

## Environment Variables

### Server (`server/.env`)

| Variable        | Required | Description                         |
|-----------------|----------|-------------------------------------|
| `OPENAI_API_KEY`| ✅ Yes   | Your OpenAI API key                 |
| `PORT`          | No       | Server port (default: 5000)         |
| `CLIENT_URL`    | No       | Frontend URL for CORS (default: http://localhost:5173) |

### Client (`client/.env`)

| Variable        | Required | Description                         |
|-----------------|----------|-------------------------------------|
| `VITE_API_URL`  | No       | Backend API URL (default: http://localhost:5000/api) |

---

## Usage Tips

- Paste **one review per line** in the textarea
- Maximum **50 reviews** per analysis
- Use the **Load Examples** button to try it immediately
- Click **Export CSV** to download results as a spreadsheet
- Use **search and filters** to find specific reviews in the results
- **Copy** any suggested response with one click

---

## License

MIT — feel free to use and modify for your hospitality business.

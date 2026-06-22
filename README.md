# 🏔️ Himalayan Guest Experience Intelligence Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-black?logo=openai)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)
![Week](https://img.shields.io/badge/SIP-Week%203-orange)

</p>

> AI-powered hospitality analytics platform that transforms guest reviews into actionable business insights using Large Language Models.

---

# 📖 Overview

Himalayan Guest Experience Intelligence Platform helps hotels, resorts, and hospitality businesses understand customer feedback instantly.

Instead of manually reading hundreds of reviews, the platform automatically:

- Detects sentiment
- Identifies major complaint themes
- Generates professional management responses
- Calculates business insights
- Visualizes customer satisfaction trends

The project combines **React**, **Node.js**, **Express**, and **OpenAI** to create a modern AI-powered analytics dashboard.

---

# ✨ Features

## 🤖 AI Review Analysis

- Sentiment Classification
- Theme Detection
- AI-generated Response Suggestions
- Review Categorization
- Batch Review Processing

---

## 📊 Dashboard

- Total Reviews
- Positive Reviews
- Negative Reviews
- Neutral Reviews
- Theme Distribution
- Sentiment Analytics
- Interactive Charts

---

## 👤 Authentication

- User Login
- Secure Authentication
- Protected Dashboard
- Session Management

---

## 📈 Analytics

- Pie Charts
- Review Statistics
- Theme Analysis
- Sentiment Breakdown
- Exportable Reports

---

## 📂 Data Management

- CSV Export
- Search Reviews
- Filter by Theme
- Filter by Sentiment
- Sort Results

---

## 🎨 User Experience

- Responsive Design (Mobile / Tablet / Desktop)
- Modern UI
- Dark / Light Mode Toggle
- Loading States
- Error Handling
- Clean Dashboard

---

## 🧩 Component Library (Week 3)

Reusable UI primitives in `client/src/components/ui/`:

| Component | Description |
|---|---|
| `Button` | Primary, secondary, ghost variants with size control |
| `Input` | Text input with label, error state, icon support |
| `Modal` | Accessible overlay dialog with backdrop dismiss |
| `Toast` | Auto-dismissing notification (success / error / warning / info) |
| `Loader` | Animated spinner with size and overlay variants |

All components are documented with JSDoc, exported via `index.js`, and demoed at `/components`.

---

# 🖼️ Screenshots

## Desktop (1440px)
<img width="1440" height="2295" alt="screenshot_desktop" src="https://github.com/user-attachments/assets/fb1e5ef6-6674-46ea-a759-14b8330f9006" />


## Tablet (768px)
<img width="768" height="3141" alt="screenshot_tablet" src="https://github.com/user-attachments/assets/3e54983a-7378-4a6a-9382-da5470c97f50" />


## Mobile (375px)
<img width="375" height="3965" alt="screenshot_mobile" src="https://github.com/user-attachments/assets/05ac7634-b73e-4f97-842e-025672e52a51" />


## Light Mode
<img width="1440" height="2295" alt="screenshot_light" src="https://github.com/user-attachments/assets/c5db45e1-3c4e-4a00-a681-0a7a61df07e7" />


## Dark Mode
<img width="1440" height="2295" alt="screenshot_dark" src="https://github.com/user-attachments/assets/3a54483f-cf3e-4da0-9826-c43dafd84135" />


---

# 🏗️ Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- Axios
- React Router
- Recharts

---

## Backend

- Node.js
- Express.js
- OpenAI SDK

---

## AI

- OpenAI GPT-3.5

---

## Database

- MongoDB *(if connected)*

---

## Authentication

- JWT / Firebase *(depending on your implementation)*

---

# 📂 Project Structure

```text
himalayan-review-platform/
│
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── ui/                        ← Week 3: Component Library
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── index.js
│   │   │   ├── DashboardSidebar.jsx       ← Week 3
│   │   │   ├── ReviewDetailModal.jsx      ← Week 3
│   │   │   ├── ThemeToggle.jsx            ← Week 3
│   │   │   ├── Badge.jsx
│   │   │   ├── ErrorBanner.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LoadingOverlay.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ResultsTable.jsx
│   │   │   ├── ReviewInput.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── SentimentChart.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── StatsCards.jsx
│   │   │
│   │   ├── context/                       ← Week 3
│   │   │   ├── ThemeContext.jsx
│   │   │   └── ToastContext.jsx
│   │   │
│   │   ├── data/
│   │   │   └── sampleData.js
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── ComponentShowcase.jsx      ← Week 3
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── exportCSV.js
│   │   │   └── reviewMeta.js              ← Week 3
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   └── analyzeController.js
│   ├── routes/
│   │   └── analyze.js
│   ├── services/
│   │   └── openaiService.js
│   ├── index.js
│   └── package.json
│
├── docs/
│   └── screenshots/                       ← Week 3 responsive screenshots
│
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/pranjalpundeer/Himalayan-Guest-Experience-Intelligence-Platform.git
cd Himalayan-Guest-Experience-Intelligence-Platform
```

## Install Dependencies

```bash
npm install
cd client && npm install
cd ../server && npm install
```

---

# 🔑 Environment Variables

Create `server/.env`:

```env
OPENAI_API_KEY=your_api_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run Project

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client
npm run dev
```

Visit `http://localhost:5173` — and go to `/components` to see the full component library showcase.

---

# 📡 API

## POST `/api/analyze`

### Request
```json
{
  "reviews": ["Great food and amazing staff!"]
}
```

### Response
```json
{
  "results": [
    {
      "review": "Great food and amazing staff!",
      "sentiment": "Positive",
      "theme": "Food",
      "response": "Thank you for your kind words! We are thrilled our team made your stay memorable."
    }
  ]
}
```

---

# 🧠 AI Workflow

```
Guest Reviews → OpenAI Analysis → Sentiment Detection
      → Theme Classification → AI Response Generation → Dashboard
```

---

# 🚀 Future Improvements

- Multi-language review support
- PDF Report Generation
- Email Reports
- Real-time Analytics
- Hotel Admin Panel
- Team Collaboration
- AI Trend Prediction
- Review History
- Cloud Deployment
- Accessibility (ARIA) pass on component library

---

# 🎯 Learning Outcomes

This project demonstrates:

- REST API Development
- React Application Architecture
- AI Integration & Prompt Engineering
- Reusable Component Library Design
- Dark / Light Theme System
- Responsive UI Development (Mobile → Desktop)
- Data Visualization
- Error Handling & Loading States
- Software Engineering Best Practices

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Pranjal Pundeer**  
Engineering Student  
AI • Full Stack Development • Software Engineering

---

⭐ If you like this project, consider giving it a star!

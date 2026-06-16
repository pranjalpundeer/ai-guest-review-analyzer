# 🏔️ Himalayan Guest Experience Intelligence Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-black?logo=openai)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

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

- Responsive Design
- Modern UI
- Dark Mode
- Loading States
- Error Handling
- Clean Dashboard

---

# 🖼️ Screenshots

> Add screenshots after deployment.

```
Home Page
<img width="1201" height="772" alt="Screenshot 2026-06-16 at 10 52 15 AM" src="https://github.com/user-attachments/assets/0cd44ba9-de8b-4f76-a5fd-344983773773" />


Dashboard & Review Analysis
<img width="1201" height="772" alt="Screenshot 2026-06-16 at 10 52 51 AM" src="https://github.com/user-attachments/assets/8ca013c1-f2c6-45f1-ae84-62806d3ed2d7" />

<img width="1201" height="772" alt="Screenshot 2026-06-16 at 10 54 13 AM" src="https://github.com/user-attachments/assets/c7efcc12-9390-4e13-a3a9-1a4bf9f70ab0" />

Analytics
<img width="1013" height="155" alt="Screenshot 2026-06-16 at 10 56 37 AM" src="https://github.com/user-attachments/assets/6aef2bfe-b3d2-4145-943f-223003e67a49" />

<img width="285" height="277" alt="Screenshot 2026-06-16 at 10 57 19 AM" src="https://github.com/user-attachments/assets/247987b9-9412-4d22-bd43-5e1b30aa31aa" />


Login
<img width="1201" height="772" alt="Screenshot 2026-06-16 at 10 57 45 AM" src="https://github.com/user-attachments/assets/c2c07091-d986-40c9-8cdd-157ac7bf6600" />

```

---

# 🏗️ Tech Stack

## Frontend

- React
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

- OpenAI GPT

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
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   │
│   │   ├── components/
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
│   │   ├── data/
│   │   │   └── sampleData.js
│   │   │
│   │   ├── hooks/
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── exportCSV.js
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
├── server/
│   ├── controllers/
│   │   └── analyzeController.js
│   │
│   ├── routes/
│   │   └── analyze.js
│   │
│   ├── services/
│   │   └── openaiService.js
│   │
│   ├── .env.example
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```
---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/himalayan-review-platform.git

cd himalayan-review-platform
```

## Install Dependencies

```bash
npm install

cd client
npm install

cd ../server
npm install
```

---

# 🔑 Environment Variables

Create:

```
server/.env
```

```env
OPENAI_API_KEY=your_api_key

PORT=5000

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run Project

Backend

```bash
cd server

npm run dev
```

Frontend

```bash
cd client

npm run dev
```

---

# 📡 API

## POST

```
/api/analyze
```

### Request

```json
{
  "reviews":[
      "Great food and amazing staff!"
  ]
}
```

---

### Response

```json
{
  "results":[
      {
          "review":"Great food",
          "sentiment":"Positive",
          "theme":"Food",
          "response":"Thank you for your feedback..."
      }
  ]
}
```

---

# 🧠 AI Workflow

```
Guest Reviews

        │

        ▼

OpenAI Analysis

        │

        ▼

Sentiment Detection

        │

        ▼

Theme Classification

        │

        ▼

AI Response Generation

        │

        ▼

Dashboard Analytics
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

---

# 🎯 Learning Outcomes

This project demonstrates:

- REST API Development
- React Application Architecture
- AI Integration
- Prompt Engineering
- Data Visualization
- Backend Architecture
- API Design
- Responsive UI Development
- Error Handling
- Software Engineering Best Practices

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Pranjal**

Engineering Student

AI • Full Stack Development • Software Engineering

---

⭐ If you like this project, consider giving it a star!

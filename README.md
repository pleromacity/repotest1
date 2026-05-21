# ELearn — Node.js E-Learning App

A full-featured e-learning platform built with Node.js, Express, and EJS.

## Features

- 🎓 **4 Courses** across Programming, Design, Data Science, Backend
- 📚 **20+ Lessons** with rich content and code examples
- 🧠 **Interactive Quizzes** after each lesson with instant feedback
- 📊 **Progress Tracking** — per-lesson and per-course completion
- 🔐 **User Auth** — register, login, sessions with bcrypt
- 🔍 **Course Filtering** — search by name, category, level
- 📱 **Responsive Design** — works on mobile and desktop

## Quick Start

```bash
npm install
node server.js
```

Open http://localhost:3000

## Demo Account

- Email: `demo@elearn.com`
- Password: `demo123`

## Project Structure

```
elearn/
├── server.js              # Entry point
├── routes/
│   ├── auth.js            # Login, register, logout
│   ├── courses.js         # Course listing, detail, lessons, quizzes
│   └── dashboard.js       # User dashboard & progress
├── data/
│   ├── users.js           # In-memory user store
│   └── courses.js         # Course & lesson content
├── views/                 # EJS templates
│   ├── partials/          # header, footer
│   ├── home.ejs
│   ├── courses.ejs
│   ├── course-detail.ejs
│   ├── lesson.ejs
│   ├── dashboard.ejs
│   ├── login.ejs
│   └── register.ejs
└── public/
    ├── css/style.css
    └── js/main.js
```

## Tech Stack

- **Backend**: Node.js + Express
- **Views**: EJS templating
- **Auth**: express-session + bcryptjs
- **Data**: In-memory (swap for MongoDB/PostgreSQL in production)
- **Fonts**: Syne (display) + DM Sans (body)

## Production Notes

- Replace in-memory stores with a real database (MongoDB, PostgreSQL)
- Add `dotenv` for secrets management
- Use `helmet` and `express-rate-limit` for security
- Add email verification for registration

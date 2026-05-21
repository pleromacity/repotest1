const express = require('express');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'elearn-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// Make user available in all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  const { getCourses } = require('./data/courses');
  const courses = getCourses();
  res.render('home', { courses });
});

app.listen(PORT, () => {
  console.log(`\n🎓 ELearn running at http://localhost:${PORT}\n`);
});

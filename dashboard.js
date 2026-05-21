const express = require('express');
const router = express.Router();
const { findUserById } = require('../data/users');
const { getCourseById } = require('../data/courses');

function requireAuth(req, res, next) {
  if (!req.session.user) return res.redirect('/auth/login');
  next();
}

router.get('/', requireAuth, (req, res) => {
  const user = findUserById(req.session.user.id);
  const enrolledCourses = user.enrolledCourses.map(id => {
    const course = getCourseById(id);
    const progress = user.progress[id] || { completedLessons: [], quizScores: {} };
    const totalLessons = course.lessonList.length;
    const completed = progress.completedLessons.length;
    const percent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    const avgScore = Object.values(progress.quizScores).length > 0
      ? Math.round(Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / Object.values(progress.quizScores).length)
      : null;
    return { course, progress, totalLessons, completed, percent, avgScore };
  });
  res.render('dashboard', { user, enrolledCourses });
});

module.exports = router;

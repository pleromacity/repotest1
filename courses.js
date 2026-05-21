const express = require('express');
const router = express.Router();
const { getCourses, getCourseBySlug, getLessonById } = require('../data/courses');
const { findUserById, enrollUser, markLessonComplete, saveQuizScore } = require('../data/users');

function requireAuth(req, res, next) {
  if (!req.session.user) return res.redirect('/auth/login');
  next();
}

// GET /courses — all courses
router.get('/', (req, res) => {
  const courses = getCourses();
  const { category, level, search } = req.query;
  let filtered = courses;
  if (category) filtered = filtered.filter(c => c.category === category);
  if (level) filtered = filtered.filter(c => c.level === level);
  if (search) filtered = filtered.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );
  res.render('courses', { courses: filtered, category, level, search });
});

// GET /courses/:slug — course detail
router.get('/:slug', (req, res) => {
  const course = getCourseBySlug(req.params.slug);
  if (!course) return res.status(404).render('404');
  let userProgress = null;
  let enrolled = false;
  if (req.session.user) {
    const user = findUserById(req.session.user.id);
    enrolled = user.enrolledCourses.includes(course.id);
    userProgress = user.progress[course.id] || null;
  }
  res.render('course-detail', { course, enrolled, userProgress });
});

// POST /courses/:slug/enroll
router.post('/:slug/enroll', requireAuth, (req, res) => {
  const course = getCourseBySlug(req.params.slug);
  if (!course) return res.status(404).render('404');
  enrollUser(req.session.user.id, course.id);
  res.redirect(`/courses/${course.slug}/learn/${course.lessonList[0].id}`);
});

// GET /courses/:slug/learn/:lessonId
router.get('/:slug/learn/:lessonId', requireAuth, (req, res) => {
  const course = getCourseBySlug(req.params.slug);
  if (!course) return res.status(404).render('404');
  const user = findUserById(req.session.user.id);
  if (!user.enrolledCourses.includes(course.id)) return res.redirect(`/courses/${course.slug}`);
  const lesson = getLessonById(req.params.slug, req.params.lessonId);
  if (!lesson) return res.status(404).render('404');
  const progress = user.progress[course.id] || { completedLessons: [], quizScores: {} };
  const lessonIndex = course.lessonList.findIndex(l => l.id === lesson.id);
  const prevLesson = lessonIndex > 0 ? course.lessonList[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessonList.length - 1 ? course.lessonList[lessonIndex + 1] : null;
  res.render('lesson', { course, lesson, progress, prevLesson, nextLesson });
});

// POST /courses/:slug/learn/:lessonId/complete
router.post('/:slug/learn/:lessonId/complete', requireAuth, (req, res) => {
  const course = getCourseBySlug(req.params.slug);
  if (!course) return res.status(404).json({ error: 'Not found' });
  markLessonComplete(req.session.user.id, course.id, req.params.lessonId);
  res.json({ success: true });
});

// POST /courses/:slug/learn/:lessonId/quiz
router.post('/:slug/learn/:lessonId/quiz', requireAuth, (req, res) => {
  const course = getCourseBySlug(req.params.slug);
  const lesson = getLessonById(req.params.slug, req.params.lessonId);
  if (!course || !lesson) return res.status(404).json({ error: 'Not found' });
  const { answer } = req.body;
  const correct = parseInt(answer) === lesson.quiz.answer;
  const score = correct ? 100 : 0;
  saveQuizScore(req.session.user.id, course.id, req.params.lessonId, score);
  markLessonComplete(req.session.user.id, course.id, req.params.lessonId);
  res.json({ correct, correctAnswer: lesson.quiz.answer, score });
});

module.exports = router;

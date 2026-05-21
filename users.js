const bcrypt = require('bcryptjs');

// In-memory user store (replace with DB in production)
const users = [];

// Seed an admin/demo user
(async () => {
  const hash = await bcrypt.hash('demo123', 10);
  users.push({
    id: 1,
    name: 'Alex Morgan',
    email: 'demo@elearn.com',
    password: hash,
    enrolledCourses: [],
    progress: {},
    joinedAt: new Date()
  });
})();

function getUsers() { return users; }

function findUserByEmail(email) {
  return users.find(u => u.email === email);
}

function findUserById(id) {
  return users.find(u => u.id === id);
}

async function createUser(name, email, password) {
  const hash = await bcrypt.hash(password, 10);
  const user = {
    id: users.length + 1,
    name,
    email,
    password: hash,
    enrolledCourses: [],
    progress: {},
    joinedAt: new Date()
  };
  users.push(user);
  return user;
}

function enrollUser(userId, courseId) {
  const user = findUserById(userId);
  if (user && !user.enrolledCourses.includes(courseId)) {
    user.enrolledCourses.push(courseId);
    if (!user.progress[courseId]) {
      user.progress[courseId] = { completedLessons: [], quizScores: {} };
    }
  }
}

function markLessonComplete(userId, courseId, lessonId) {
  const user = findUserById(userId);
  if (!user) return;
  if (!user.progress[courseId]) user.progress[courseId] = { completedLessons: [], quizScores: {} };
  const prog = user.progress[courseId];
  if (!prog.completedLessons.includes(lessonId)) {
    prog.completedLessons.push(lessonId);
  }
}

function saveQuizScore(userId, courseId, lessonId, score) {
  const user = findUserById(userId);
  if (!user) return;
  if (!user.progress[courseId]) user.progress[courseId] = { completedLessons: [], quizScores: {} };
  user.progress[courseId].quizScores[lessonId] = score;
}

module.exports = { getUsers, findUserByEmail, findUserById, createUser, enrollUser, markLessonComplete, saveQuizScore };

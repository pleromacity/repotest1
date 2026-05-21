const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { findUserByEmail, createUser } = require('../data/users');

// GET /auth/login
router.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('login', { error: null });
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);
  if (!user) return res.render('login', { error: 'Invalid email or password' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.render('login', { error: 'Invalid email or password' });

  req.session.user = { id: user.id, name: user.name, email: user.email };
  res.redirect('/dashboard');
});

// GET /auth/register
router.get('/register', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('register', { error: null });
});

// POST /auth/register
router.post('/register', async (req, res) => {
  const { name, email, password, confirm } = req.body;
  if (!name || !email || !password) return res.render('register', { error: 'All fields required' });
  if (password !== confirm) return res.render('register', { error: 'Passwords do not match' });
  if (password.length < 6) return res.render('register', { error: 'Password must be at least 6 characters' });
  if (findUserByEmail(email)) return res.render('register', { error: 'Email already registered' });

  const user = await createUser(name, email, password);
  req.session.user = { id: user.id, name: user.name, email: user.email };
  res.redirect('/dashboard');
});

// GET /auth/logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

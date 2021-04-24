const router = require('express').Router();
// const { Post } = require('../models/');

router.get('/', (req, res) => {
  
  const body = {
    title: "title",
    name: "Eric"
  }
  
  res.render('all-posts', {body});
})

router.get('/login', (req, res) => {
  res.render('login');
})

router.get('/signup', (req, res) => {
  res.render('signup');
})
module.exports = router;
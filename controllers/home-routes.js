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

module.exports = router;
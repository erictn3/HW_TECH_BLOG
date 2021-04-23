const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('./home-routes');

// use withAuth middleware to prevent access to route
// router.get('/', withAuth, async(req, res) => {
//   try{
//     const postData = await Post.findAll({
//       where: {
//         userId: req.session.userId,
//       },
//     });

//     const posts = postData.map((post) => post.get({ plain: true}));

//     res.render('')
    
//   }
// })

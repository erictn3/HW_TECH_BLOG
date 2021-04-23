const router = require('express').Router();

const withAuth = require('../utils/auth');

// use withAuth middleware to prevent access to route
router.get('/', withAuth, async(req, res) => {

})

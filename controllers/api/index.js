const router = require('express').Router;

const userRoutes = require('./user-routes.js');
const postRoutes = require('.post-routes.js');
const commentRoutes = require('./comment_routes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

module.expoerts = router;
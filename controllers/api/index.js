const router = require('express').Router;

const userRoutes = require('./user-routes.js');
const postRoutes = require('.post-routes.js');
const commentRoutes = require('./comment_routes.js');

router.use('/users', userRoutes);
router.use('/posts', psotRouts);
router.use('/comments', commentRoutes)

module.expoerts = router;
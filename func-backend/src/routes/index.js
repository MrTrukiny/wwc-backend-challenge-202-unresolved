const express = require('express');

// Import Our custom middlewares

// Routes
const { userRoutes } = require('./index.routes');

const router = express.Router();

// Use middlewares
router.use(express.json());

router.use('/users', userRoutes);


// Use custom middleware
// router.use();

module.exports = router;

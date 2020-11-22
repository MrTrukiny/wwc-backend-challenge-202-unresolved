const router = require('express').Router();
const { createOne, getAll } = require('../controllers');

router
  .route('/')
  .post(createOne)
  .get(getAll)

module.exports = router;

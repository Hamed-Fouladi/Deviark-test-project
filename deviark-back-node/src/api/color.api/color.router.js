const router = require('express').Router();

const { getColors } = require('./color.controller');

router.get('/colors', getColors);

module.exports = router;
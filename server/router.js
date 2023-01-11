const router = require('express').Router();
const controllers = require('./controllers');

router.get('/home', controllers.home.get);

module.exports = router;

const router = require('express').Router();
const controllers = require('./controllers');

router.get('/home', controllers.home.get);
router.get('/weather', controllers.weather.get);

module.exports = router;

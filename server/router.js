const router = require('express').Router();
const controllers = require('./controllers');

router.get('/battery', controllers.battery.get);
router.get('/weather', controllers.weather.get);

module.exports = router;

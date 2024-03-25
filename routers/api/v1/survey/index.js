const router = require('express').Router();
const surveyController = require('./controller');

router.post('/add', surveyController.addSurvey);

module.exports = router;
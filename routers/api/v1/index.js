let express = require('express');
let router = express.Router();

let survey = require('./survey');

router.use('/survey', survey);

module.exports = router;
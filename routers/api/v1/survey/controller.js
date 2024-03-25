exports.addSurvey = async (req, res) => {
    console.log(`
--------------------------------------------------
  User : 
  API  : addSurvey
  router.post('/survey/add', surveyController.addSurvey);
--------------------------------------------------
    `)

    const dbModels = global.DB_MODELS;

    console.log(req.body);
}
exports.addSurvey = async (req, res) => {
    console.log(`
--------------------------------------------------
  User : 
  API  : addSurvey
  router.post('/survey/add', surveyController.addSurvey);
--------------------------------------------------
    `)

    const dbModels = global.DB_MODELS;
    const body = req.body;
    try {
        await dbModels.Survey(body).save();
        res.status(200).json({ status: true })
    } catch (err) {
        console.log("[ ERROR ]", err);
        res.status(500).send({
            message: "An error occured while adding survey"
        })
    }


}
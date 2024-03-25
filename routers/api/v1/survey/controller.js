/**
 * @desciprtion 설문지 등록
 * @param {*} req 
 * @param {*} res 
 */
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
/**
 * @description 설문지 리스트 요청
 * @param {*} req 
 * @param {*} res 
 */
exports.getSurveys = async (req, res) => {
    console.log(`
    --------------------------------------------------
      User : 
      API  : getSurveys
      router.get('/survey', surveyController.getSurveys);
    --------------------------------------------------
        `)

    const dbModels = global.DB_MODELS;
    try {
        const surveys = await dbModels.Survey.find().select({ title: 1, description: 1 });
        console.log(surveys);
        res.status(200).json(surveys);
    } catch (err) {
        console.log("[ ERROR ]", err);
        res.status(500).send({
            message: "An error occured while getting survey"
        })
    }
}

/**
 * @description 설문지 정보 요청
 * @param {*} req 
 * @param {*} res 
 */
exports.getSurvey = async (req, res) => {
    console.log(`
    --------------------------------------------------
      User : 
      API  : getSurvey
      router.get('/survey/:_id', surveyController.getSurvey);
    --------------------------------------------------
        `)

    const dbModels = global.DB_MODELS;
    const _id = req.query._id;
    try {
        const survey = await dbModels.Survey.findOne({ _id })

        res.status(200).json(survey);
    } catch (err) {
        console.log("[ ERROR ]", err);
        res.status(500).send({
            message: "An error occured while getting survey"
        })
    }
}
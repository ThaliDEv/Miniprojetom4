const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/atividades', controller.createActivity);
router.get('/atividades', controller.getActivities);

router.post('/sessoes', controller.createSession);
router.get('/sessoes', controller.getSessions);

router.get('/tempo-total', controller.getTotalSpeakingTime);

module.exports = router;
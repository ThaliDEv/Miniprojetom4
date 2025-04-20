const { Activity, SpeakingSession } = require('../models');

// ATIVIDADES
const createActivity = async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar atividade' });
  }
};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar atividades' });
  }
};

// SESSÕES
const createSession = async (req, res) => {
  try {
    const session = await SpeakingSession.create(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar sessão' });
  }
};

const getSessions = async (req, res) => {
  try {
    const sessions = await SpeakingSession.findAll({ include: ['atividade'] });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar sessões' });
  }
};

// TOTAL DE MINUTOS
const getTotalSpeakingTime = async (req, res) => {
  try {
    const sessions = await SpeakingSession.findAll();
    const total = sessions.reduce((sum, s) => sum + s.duracao, 0);
    res.json({ totalMinutosFalando: total });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao calcular tempo total' });
  }
};

module.exports = {
  createActivity,
  getActivities,
  createSession,
  getSessions,
  getTotalSpeakingTime
};

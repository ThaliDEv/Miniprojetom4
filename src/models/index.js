const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Activity = require('./Activity')(sequelize);
const SpeakingSession = require('./SpeakingSession')(sequelize);

// Associações
Activity.hasMany(SpeakingSession, { foreignKey: 'activityId' });
SpeakingSession.belongsTo(Activity, { as: 'atividade', foreignKey: 'activityId' });

module.exports = {
  sequelize,
  Activity,
  SpeakingSession
};

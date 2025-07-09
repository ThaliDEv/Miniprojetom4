const { Sequelize, DataTypes } = require('sequelize');

// Conexão com SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite'
});

// MODELOS
const Activity = sequelize.define('Activity', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false }
});

const SpeakingSession = sequelize.define('SpeakingSession', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  duracao: { type: DataTypes.INTEGER, allowNull: false },
  activityId: { type: DataTypes.INTEGER, allowNull: false }
});

// Associações
Activity.hasMany(SpeakingSession, { foreignKey: 'activityId' });
SpeakingSession.belongsTo(Activity, { as: 'atividade', foreignKey: 'activityId' });

// Sincronização + inserção de dados simulados
const initDatabase = async () => {
  await sequelize.sync();

  const atividades = await Activity.findAll();
  if (atividades.length === 0) {
    const a1 = await Activity.create({ nome: 'Praticar Inglês' });
    const a2 = await Activity.create({ nome: 'Reunião de trabalho' });

    await SpeakingSession.create({ duracao: 30, activityId: a1.id });
    await SpeakingSession.create({ duracao: 45, activityId: a2.id });

    console.log('✅ Dados simulados inseridos no banco.');
  }
};

module.exports = {
  sequelize,
  Activity,
  SpeakingSession,
  initDatabase
};

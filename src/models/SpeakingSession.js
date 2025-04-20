const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SpeakingSession = sequelize.define('SpeakingSession', {
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return SpeakingSession;
};

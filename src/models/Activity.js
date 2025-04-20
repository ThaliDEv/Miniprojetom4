const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Activity = sequelize.define('Activity', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Activity;
};
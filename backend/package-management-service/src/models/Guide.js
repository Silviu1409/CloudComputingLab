const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Guide = sequelize.define('Guide', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Guide.associate = (models) => {
  Guide.belongsToMany(models.Package, {
    through: models.PackageGuide,
    foreignKey: 'guide_id',
    otherKey: 'package_id',
    as: 'packages',
  });
};

module.exports = Guide;

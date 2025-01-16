const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Package = require('./Package');
const Guide = require('./Guide');

const PackageGuide = sequelize.define('PackageGuide', {
  package_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Package,
      key: 'id',
    },
    allowNull: false,
  },
  guide_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Guide,
      key: 'id',
    },
    allowNull: false,
  },
});

PackageGuide.associate = (models) => {
  PackageGuide.belongsTo(models.Package, {
    foreignKey: 'package_id',
  });
  PackageGuide.belongsTo(models.Guide, {
    foreignKey: 'guide_id',
  });
};

module.exports = PackageGuide;

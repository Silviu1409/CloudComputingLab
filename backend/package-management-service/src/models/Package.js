const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Package = sequelize.define('Package', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imgSrc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

Package.associate = (models) => {
  Package.belongsToMany(models.Guide, {
    through: models.PackageGuide,
    foreignKey: 'package_id',
    otherKey: 'guide_id',
    as: 'guides',
  });
};

module.exports = Package;

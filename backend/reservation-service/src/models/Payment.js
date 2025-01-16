const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  paid_on: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  payment_status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  payment_method: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  }
});

Payment.associate = (models) => {
  Payment.hasMany(models.Reservation, {
    foreignKey: 'payment_id',
    as: 'reservations',
  });
};

module.exports = Payment;
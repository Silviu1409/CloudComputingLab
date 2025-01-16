const Payment = require('../models/Payment');

const createPayment = async (req, res, next) => {
  try {
    const { reservationId, amount } = req.body;
    const payment = await Payment.create({ reservationId, amount });
    res.status(201).json({ message: 'Payment created successfully', payment });
  } catch (err) {
    next(err);
  }
};

const getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (err) {
    next(err);
  }
};

const processPayment = async (req, res, next) => {
  const { paymentId, status, amount } = req.body;

  try {
    const payment = await Payment.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ message: 'Payment record not found.' });
    }

    if (!amount && !payment.amount) {
      return res.status(400).json({ message: 'Payment amount is required.' });
    }

    if (status === 'paid') {
      payment.payment_status = 'paid';
      payment.paid_on = new Date();
    } else if (status === 'failed') {
      payment.payment_status = 'failed';
    } else if (status === 'pending') {
      payment.payment_status = 'pending';
    } else {
      return res.status(400).json({ message: 'Invalid payment status.' });
    }

    if (amount) {
      payment.amount = amount;
    }

    await payment.save();

    res.status(200).json({
      message: 'Payment processed successfully.',
      payment,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createPayment, getPayments, processPayment }

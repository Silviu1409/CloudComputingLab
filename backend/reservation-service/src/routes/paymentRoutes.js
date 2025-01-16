const express = require('express');
const { createPayment, getPayments, processPayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/process', processPayment);
router.post('/', createPayment);
router.get('/', getPayments);

module.exports = router;

const express = require('express');
const { createReservation, getReservations, getReservationsExtended, getReservationWithPayment, updateReservationStatus } = require('../controllers/reservationController');

const router = express.Router();

router.post('/', createReservation);
router.get('/', getReservations);
router.get('/all/extended', getReservationsExtended);
router.get('/:id', getReservationWithPayment);
router.patch('/:id/status', updateReservationStatus);

module.exports = router;

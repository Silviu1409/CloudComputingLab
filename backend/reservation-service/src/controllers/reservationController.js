const Reservation = require('../models/Reservation');
const Payment = require('../models/Payment');
const axios = require('axios');

const createReservation = async (req, res, next) => {
  try {
    const { user_id, payment_id, package_id, status, reservedOn, totalPrice, seats } = req.body;

    const userResponse = await axios.get(`http://user-management-service:3001/api/users/user/${user_id}`);
    const packageResponse = await axios.get(`http://package-management-service:3002/api/packages/package/${package_id}`);

    if (!userResponse.data) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!packageResponse.data) {
      return res.status(404).json({ message: 'Package not found' });
    }

    const reservation = await Reservation.create({
      user_id: user_id,
      payment_id: payment_id,
      package_id: package_id,
      status,
      reserved_on: reservedOn,
      total_price: totalPrice,
      seats
    });

    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
}

const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.findAll();
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};

const getReservationsExtended = async (req, res, next) => {
  try {
    const reservations = await Reservation.findAll({
      include: [
        { model: Payment, as: 'payment' },
      ],
      raw: true,
      nest: true,
    });

    const fetchUserDetails = async (user_id) => {
      const response = await axios.get(`http://user-management-service:3001/api/users/user/${user_id}`);
      return response.data;
    };

    const fetchPackageDetails = async (package_id) => {
      const response = await axios.get(`http://package-management-service:3002/api/packages/package/${package_id}`);
      return response.data;
    };

    const reservationsWithDetails = await Promise.all(
      reservations.map(async (reservation) => {
        const user = await fetchUserDetails(reservation.user_id);
        const package = await fetchPackageDetails(reservation.package_id);

        const json = {
          reservationId: reservation.id,
          user: {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
          },
          package: {
            id: package.id,
            name: package.name,
            description: package.description,
            price: package.price,
            duration: package.duration,
            availableSeats: package.availableSeats,
          },
          payment: {
            status: reservation.payment.payment_status,
            method: reservation.payment.payment_method,
            amount: reservation.payment.amount,
            paid_on: reservation.payment.paid_on,
          },
          status: reservation.status,
          totalPrice: reservation.total_price,
          reservedOn: reservation.reserved_on,
          seats: reservation.seats,
        };

        console.error("reservation: ", json)

        return json;
      })
    );

    res.status(200).json(reservationsWithDetails);
  } catch (err) {
    next(err);
  }
};

const getReservationWithPayment = async (req, res, next) => {
  const { id } = req.params;

  try {
    const reservationWithPayment = await Reservation.findOne({
      where: { id },
      include: [{
        model: Payment,
        as: 'payment'
      }]
    });

    if (!reservationWithPayment) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.status(200).json(reservationWithPayment);
  } catch (err) {
    next(err);
  }
};

const updateReservationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    reservation.status = status;
    await reservation.save();
    res.status(200).json({ message: 'Reservation status updated', reservation });
  } catch (err) {
    next(err);
  }
};

module.exports = { createReservation, getReservations, getReservationsExtended, getReservationWithPayment, updateReservationStatus }

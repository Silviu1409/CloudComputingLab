const express = require("express");
const cors = require('cors');
const sequelize = require('./config/database');
const reservationRoutes = require('./routes/reservationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const Payment = require("./models/Payment");
const Reservation = require("./models/Reservation");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/reservations', reservationRoutes);
app.use('/api/payments', paymentRoutes);

Payment.associate({ Reservation });
Reservation.associate({ Payment });

sequelize
  .sync( {force: true} )
  .then(async () => {
    console.log("Database synced!");

    await insertInitialData();

    app.listen(PORT, () => {
        console.log(`Reservation Service running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error syncing database:", err));

async function insertInitialData() {
    const existingReservations = await sequelize.models.Reservation.findAll();
    if (existingReservations.length === 0) {
        await sequelize.models.Payment.bulkCreate([
            { payment_status: 'paid', payment_method: 'credit_card', paid_on: '2025-01-10 12:40:00', amount: 1998 },
            { payment_status: 'pending', payment_method: 'paypal', paid_on: null, amount: 1200 },
            { payment_status: 'failed', payment_method: 'credit_card', paid_on: null, amount: 8000 },
            { payment_status: 'paid', payment_method: 'bank_transfer', paid_on: '2025-01-13 15:15:00', amount: 9000 },
            { payment_status: 'paid', payment_method: 'credit_card', paid_on: '2025-01-14 09:10:00', amount: 2995 },
            { payment_status: 'pending', payment_method: 'paypal', paid_on: null, amount: 2400 },
            { payment_status: 'failed', payment_method: 'credit_card', paid_on: null, amount: 3000 },
            { payment_status: 'paid', payment_method: 'bank_transfer', paid_on: '2025-01-17 14:00:00', amount: 7200 },
            { payment_status: 'pending', payment_method: 'credit_card', paid_on: null, amount: 5000 },
            { payment_status: 'paid', payment_method: 'paypal', paid_on: '2025-01-19 11:45:00', amount: 4400 }
        ]);
        console.log("Payment details data inserted!");

        await sequelize.models.Reservation.bulkCreate([
            { user_id: 1, payment_id: 1, package_id: 1, status: 'confirmed', reserved_on: '2025-01-10 12:34:56', total_price: 1998.00, seats: 2 },
            { user_id: 1, payment_id: 3, package_id: 2, status: 'pending', reserved_on: '2025-01-11 14:20:00', total_price: 1200.00, seats: 1 },
            { user_id: 2, payment_id: 5, package_id: 3, status: 'cancelled', reserved_on: '2025-01-12 09:45:30', total_price: 8000.00, seats: 4 },
            { user_id: 2, payment_id: 7, package_id: 4, status: 'confirmed', reserved_on: '2025-01-13 15:10:25', total_price: 9000.00, seats: 3 },
            { user_id: 1, payment_id: 2, package_id: 5, status: 'confirmed', reserved_on: '2025-01-14 08:50:00', total_price: 2995.00, seats: 5 },
            { user_id: 2, payment_id: 4, package_id: 6, status: 'pending', reserved_on: '2025-01-15 17:30:00', total_price: 2400.00, seats: 3 },
            { user_id: 1, payment_id: 6, package_id: 7, status: 'cancelled', reserved_on: '2025-01-16 10:15:45', total_price: 3000.00, seats: 3 },
            { user_id: 2, payment_id: 8, package_id: 8, status: 'confirmed', reserved_on: '2025-01-17 13:45:00', total_price: 7200.00, seats: 4 },
            { user_id: 1, payment_id: 9, package_id: 9, status: 'pending', reserved_on: '2025-01-18 18:20:30', total_price: 5000.00, seats: 2 },
            { user_id: 2, payment_id: 10, package_id: 10, status: 'confirmed', reserved_on: '2025-01-19 11:25:15', total_price: 4400.00, seats: 2 }
        ]);
        console.log("Reservations data inserted!");
    } else {
        console.log("Reservations data already exists.");
    }
}

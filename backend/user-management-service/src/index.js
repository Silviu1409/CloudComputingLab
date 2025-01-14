const express = require("express");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use("/api/users", userRoutes);

// Sync database and seed data if empty
sequelize
  .sync() // No `force: true` to avoid dropping the table
  .then(async () => {
    console.log("Database synced!");

    // try {
    //   // Check if there are already users in the database
    //   const userCount = await User.count();
    //   if (userCount === 0) {
    //     console.log("No users found. Seeding initial data...");

    //     // Insert initial data
    //     const initialUsers = [
    //       {
    //         first_name: "John",
    //         last_name: "Doe",
    //         email: "john.doe@example.com",
    //         password_hash: "hashed_password_1", // Use a hashed password in production
    //         phone_number: "123-456-7890",
    //         role: "customer",
    //       },
    //       {
    //         first_name: "Jane",
    //         last_name: "Smith",
    //         email: "jane.smith@example.com",
    //         password_hash: "hashed_password_2",
    //         phone_number: "987-654-3210",
    //         role: "admin",
    //       },
    //     ];

    //     await User.bulkCreate(initialUsers);
    //     console.log("Initial data inserted!");
    //   } else {
    //     console.log("Users already exist. Skipping seeding.");
    //   }
    // } catch (error) {
    //   console.error("Error during data seeding:", error);
    // }

    // Start the server
    app.listen(PORT, () =>
      console.log(`User management service running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("Error syncing database:", err));

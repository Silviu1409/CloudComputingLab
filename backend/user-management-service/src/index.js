const express = require("express");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

sequelize
  .sync()
  .then(async () => {
    console.log("Database synced!");

    await insertInitialData();

    app.listen(PORT, () =>
      console.log(`User management service running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("Error syncing database:", err));

async function insertInitialData() {
  const existingUsers = await sequelize.models.User.findAll();
  if (existingUsers.length === 0) {
    await sequelize.models.User.bulkCreate([
      { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', password_hash: 'hashed_password_1', phone_number: '123-456-7890', role: 'customer' },
      { first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', password_hash: 'hashed_password_2', phone_number: '987-654-3210', role: 'admin' }
    ]);
    console.log("Users data inserted!");
  } else {
    console.log("Users data already exists.");
  }
}

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

    app.listen(PORT, () =>
      console.log(`User management service running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("Error syncing database:", err));

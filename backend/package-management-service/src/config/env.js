require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3002,
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
};

require('dotenv').config();

const connectToDatabase = require('./src/config/db');
const app = require('./src/app');
connectToDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("❌ DB connection failed", err);
  });
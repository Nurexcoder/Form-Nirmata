// app.js (main server file)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/formbuiler");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
const initializeConfig = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/formbuilder");
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
};
// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/formbuilder", formRoutes);

// Start the server
app.listen(PORT, async () => {
  await initializeConfig();
  console.log(`Server is running on http://localhost:${PORT}`);
});

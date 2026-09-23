require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job Board API is running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

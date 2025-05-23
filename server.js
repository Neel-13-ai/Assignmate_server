const express = require("express");
const cors = require("cors");
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/',(req,res) =>{
  res.json("Deployed successfully")
})

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log("server is running on : http://localhost:5000");
});

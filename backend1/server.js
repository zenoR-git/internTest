require("dotenv").config();
const express = require("express");
const cors = require("cors"); 

const app = express();


const connectDB = require("./config/db");
connectDB()

const profileRoutes = require("./Routes/profileRoute");
const {addProfile} = require("./controller/profileController")
const validator = require("./middleware/validator")

// initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());


app.use("/user/:id/profile", profileRoutes);
app.post("/add",validator,addProfile)

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json(err.message)
  })

// setting up port
const PORT = process.env.NODE_PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
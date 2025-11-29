const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");
const authRouters = require("./routes/authRoutes");

dotenv.config();
connectDB();



const app = express();



app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRouters);

const { verifyToken } = require("./middleware/authMiddleware");
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: `hello ${req.user.username} , this is protected data` });
});

const PORT = process.env.PORT || "5001";
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

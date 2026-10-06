const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const routes = require("./routes/userroutes");

const app = express();

app.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://127.0.0.1:5501",
        "http://localhost:5500",
        "http://localhost:5501"
    ],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

connectDB();

// API ROUTES
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
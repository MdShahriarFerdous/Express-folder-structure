require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./src/routes/api");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const mongoose = require("mongoose");

// Middlewares implement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(hpp());
app.use(morgan("dev"));

// Request Rate Limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
});
app.use(limiter);

//mongoose set up and connection
mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.MONGO_DB_CONNECTION)
	.then(() => {
		console.log("MongoDB connected!!");
	})
	.catch((err) => {
		console.log("Failed to connect to MongoDB", err.message);
	});

app.use("/api/v1", router);

// undefined route
app.use("*", (req, res) => {
	res.status(404).json({ Failed: "Your request not found!" });
});

module.exports = app;

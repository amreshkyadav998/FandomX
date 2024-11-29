const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Database");
    } catch (error) {
        console.error("Error occurred while connecting to the database:", error.message);
        process.exit(1); // Exit process if unable to connect to the database
    }
};

module.exports = connectDB;

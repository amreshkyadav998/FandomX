const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router.js");
const dotenv = require("dotenv");
const connectDB = require("./utils/db.js");
dotenv.config();

// let's tackle cors
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = ['http://localhost:5173', 'https://www.airflash.co' , 'https://fandom-x.vercel.app'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.options('*', cors(corsOptions));
app.use(express.json());
// Another way to connect mongoDb
(async () => {
    try {
        await connectDB();
        console.log("Mongodb connection successful"); // Should appear
    } catch (err) {
        console.error("Failed to start the server:", err.message);
    }
  })();
// Root for checkup
app.get("/",(req,res) => {
    return res.send("Hi , I am root");
})



//Mouting the router
app.use("/api/auth",authRouter);


//Port Listening
app.listen(process.env.PORT,()=>{
    console.log(`App Listening at PORT ${process.env.PORT}`);
})
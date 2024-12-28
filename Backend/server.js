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
        const allowedOrigins = [
            'https://fandom-x.vercel.app',
            // 'http://localhost:5173',
            'https://www.airflash.co',
            'https://fandom-b3db17hma-amresh-yadavs-projects-d15da128.vercel.app'
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log(`Blocked by CORS: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Explicitly handle preflight requests
app.options('*', cors(corsOptions));
app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204);
});


// Debug middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Request Origin: ${req.headers.origin}`);
    console.log(`Request Method: ${req.method}`);
    next();
});


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
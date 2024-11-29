const express = require("express");
const app = express();
const authRouter = require("./router/auth-router.js");
const dotenv = require("dotenv");
const connectDB = require("./utils/db.js");
dotenv.config();

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
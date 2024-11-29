const User = require("../models/user-model.js"); 
// -----------------------
// Signp Logic
// -----------------------
const signup = async (req,res,next) => {
    try {
        const {username,email,password,phone} = req.body;
        if(!username || !email || !password || !phone){
            res.status(400).json({msg:"missing some field"});
        }

        // check if email already exists
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({msg:"User already exist with this emailId"});
        }

        // Create the new user in the database
        const userCreated = await User.create({username,email,password,phone});

        res.status(201).json({msg:"User registered Successfully" , userCreated});
    } catch (error) {
        console.log(error);
    }
}

const login = async (req,res) => {
    try {
        res.send("Hello everyone this is login page");
    } catch (error) {
        console.log(error);
    }
}


module.exports = {signup,login};
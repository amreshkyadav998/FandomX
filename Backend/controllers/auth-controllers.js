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

        // res.status(201).json({msg:"User registered Successfully" , userCreated});
        res.status(201).json({
            msg: "User registered successfully",
           token: userCreated.generateToken(),
           userId:userCreated._id.toString(),
         }); // Send success response
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
  
      // Check if email already exists
      const userExist = await User.findOne({ email: email });
      if (!userExist) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
  
      // if user exists, then compare the password
      const isMatch = await userExist.comparePassword(password);  ////calling comparePassword function from user-models
      if (isMatch) {
        // Generate token
        const token = userExist.generateToken(); //calling generateToken function from user-models
  
        res.status(200).json({
          msg: "Login successful",
          token: token, // JWT token
          userId: userExist._id.toString(), // User ID
        });
      } else {
        return res.status(401).json({ message: "Invalid Email or Password" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  };


module.exports = {signup,login};
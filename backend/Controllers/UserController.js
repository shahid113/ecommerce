const User=require('../Models/UserModel');
const sendToken = require('../utils/jwtToken');


exports.register=async(req, res)=>{

      try {

        const {name, email, password}=req.body;
        const user=await User.create({
          name, email, password
        });

        sendToken(user, 201, res)
        
      } catch (error) {
         res.status(400).json({
            message:error.message
         })
      }


};

exports.login=async(req, res, next)=>{

    const{email, password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            message:"Please Enter Email & Password"
        })
    }

    const user=await User.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({
            message:"Invalid Email or Password"
        })
    }
     
    user.comparePassword(password).then((result)=>{
         
        if(result==true){
            sendToken(user, 200, res)
        }
        else{
            return res.status(400).json({
                message:"Password Doesn't Match!",
                success:false
            })
        }
        
    });
     
}

exports.logout=async(req, res, next)=>{

    res.cookie("token", null, {
        expires:new Date(Date.now()),
        httpOnly:true,
    })
    
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
}

exports.getallUser=async (req, res)=>{

    try {

        const users=await User.find();


        res.status(200).json({
            success:true,
            users
        })
        
      } catch (error) {
         res.status(400).json({
            message:error.message
         })
      }

}




const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const validator=require('validator');



const userSchema=new mongoose.Schema({
     
    name:{
        type:String,
        required:[true, "Please Enter your name"],
        maxLength:[30, "Name can't exceed 30 characters"],
        minLength:[4, "Name should have more than 4 character"],

    },

    email:{
        type:String,
        required:[true, "Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail, "Please Enter a Valid Email"]
    },

    password:{
        type:String,
        required:[true, "Please Enter your Passwrod"],
        minLength:[8, "Password should be grater than 8 characters"],
        select:false
    },

    role:{
        type:String,
        default:"user",
    },


})


// add jwt token to user

userSchema.methods.getJWTtoken=function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    this.password=await bcrypt.hash(this.password, 10);
})

userSchema.methods.toJSON=function(){
    let obj=this.toObject();
    delete obj.password;
    return obj;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}




module.exports=mongoose.model("User", userSchema);
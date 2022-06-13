const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    role:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"role"
    },
    firstName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    contactNo:{
        type:String,
        require:true
    }
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel
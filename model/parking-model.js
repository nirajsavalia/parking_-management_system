const mongoose = require("mongoose")

const parkingSchema = new mongoose.Schema({

   
    parkingId:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    parkingName:{
        type:String,
        require:true
    },
    ownerName:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
})

const parkingModel = mongoose.model("parking",parkingSchema)
module.exports = parkingModel
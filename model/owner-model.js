const mongoose = require("mongoose")

const OwnerSchema = new mongoose.Schema({

    
    ownerId:{
        type:String,
        require:true
    },
    ownerName:{
        type:String,
        require:true
    },
    ParkingName:{
        type:String,
        require:true
    }
})

const OwnerModel = mongoose.model("owner",OwnerSchema)
module.exports = OwnerModel
const mongoose = require("mongoose")

const parkslipSchema = new mongoose.Schema({

   
    parkinslipId:{
        type:String,
        require:true
    },
    parkinslipreservationId:{
        type:String,
        require:true
    },
    bookingDate:{
        type:String,
        require:true
    },
    actualentryTime:{
        type:String,
        require:true
    },
    actualexitTime:{
        type:String,
        require:true
    }
})

const parkslipModel = mongoose.model("prkslip",parkslipSchema)
module.exports = parkslipModel
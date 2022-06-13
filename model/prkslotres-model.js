const mongoose = require("mongoose")

const parkslotsresSchema = new mongoose.Schema({

   
    parkingslotsId:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    slotId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"parkingslots"
    },
    bookingDate:{
        type:String,
        require:true
    },
    entryTime:{
        type:String,
        require:true
    },
    exitTime:{
        type:String,
        require:true
    }
})

const parkslotsresModel = mongoose.model("prkslotres",parkslotsresSchema)
module.exports = parkslotsresModel
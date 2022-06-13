const mongoose = require("mongoose")

const parkslotsSchema = new mongoose.Schema({

   
    slotsId:{
        type:String,
        require:true
    },
    parkingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"parking"
    },
    discription:{
        type:String,
        require:true
    }
})

const parkslotsModel = mongoose.model("parkingslots",parkslotsSchema)
module.exports = parkslotsModel
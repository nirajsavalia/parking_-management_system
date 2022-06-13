const mongoose = require("mongoose")

const subsciberSchema = new mongoose.Schema({

   
    subscribersId:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    purchasedate:{
        type:String,
        require:true
    },
    startdate:{
        type:String,
        require:true
    },
    durationInDays:{
        type:String,
        require:true
    },
    vehicalNo:{
        type:String,
        require:true
    }

})

const subsciberModel = mongoose.model("subscribers",subsciberSchema)
module.exports = subsciberModel
const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({

    
    paymentId:{
        type:String,
        require:true
    },
    reservationId:{
        type:String,
        require:true
    },
    vechicalNo:{
        type:String,
        require:true
    },
    refrenceNo:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
    }
})

const PaymentModel = mongoose.model("payment",PaymentSchema)
module.exports = PaymentModel
const PaymentModel = require("../model/payments-model")

//add [post]

module.exports.addparkingslots = function(req,res){

    let paymentId = req.body.paymentId
    let reservationId= req.body.reservationId
    let vechicalNo = req.body.vechicalNo
    let refrenceNo = req.body.refrenceNo
    let status = req.body.status

    
    let payment = new PaymentModel({
        paymentId: paymentId,
        reservationId: reservationId,
        vechicalNo: vechicalNo,
        refrenceNo: refrenceNo,
        status: status

    })

    payment.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllPayment = function (req, res) {

    PaymentModel.find().populate("paymentId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deletePayment = function(req,res){

    let paymentId = req.params.paymentId
    let reservationId = req.params.reservationId

    PaymentModel.deleteOne({_id:paymentId},{reservationId:reservationId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updatePayment = function(req,res){
    let paymentId = req.body.paymentId
    let reservationId= req.body.reservationId

    PaymentModel.updateOne({_id:paymentId},{reservationId:reservationId},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

const parkslipModel = require("../model/parkslips-model")

//add [post]

module.exports.addparking = function(req,res){

    let parkinslipId = req.body.parkinslipId
    let parkinslipreservationId= req.body.parkinslipreservationId
    let bookingDate = req.body.bookingDate
    let actualentryTime = req.body.actualentryTime
    let actualexitTime = req.body.actualexitTime
    
   

    let parkingslip = new parkslipModel({
        parkinslipId: parkinslipId,
        parkinslipreservationId: parkinslipreservationId,
        bookingDate: bookingDate,
        actualentryTime: actualentryTime,
        actualexitTime: actualexitTime
    })

    parkingslip.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllParkingslips = function (req, res) {

    parkslipModel.find().populate("parkinslipId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteParkingslips = function(req,res){

    let parkinslipId = req.params.parkinslipId

    parkslipModel.deleteOne({_id:parkinslipId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updateParkingslips = function(req,res){
    let parkinslipId = req.body.parkinslipId
    let parkinslipreservationId= req.body.parkinslipreservationId

    parkslipModel.updateOne({_id:parkinslipId},{parkinslipreservationId:parkinslipreservationId},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

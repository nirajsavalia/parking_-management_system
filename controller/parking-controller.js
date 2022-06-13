const ParkingModel = require("../model/parking-model")

//add [post]

module.exports.addparking = function(req,res){

    let parkingId = req.body.parkingId
    let userId = req.body.userId
    let ParkingName = req.body.ParkingName
    let ownerName = req.body.ownerName
    let status = req.body.status
    
   

    let parking = new ParkingModel({
        parkingId: parkingId,
        userId: userId,
        ParkingName: ParkingName,
        ownerName: ownerName,
        status: status
    })

    parking.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllParking = function (req, res) {

    ParkingModel.find().populate("parkingId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteParking = function(req,res){
    let parkingId = req.params.parkingId

    ParkingModel.deleteOne({_id:parkingId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updateParking = function(req,res){
    let parkingId = req.body.parkingId
    let userId = req.body.userId
    let ParkingName = req.body.ParkingName
    let ownerName = req.body.ownerName
    let status = req.body.status

    ParkingModel.updateOne({_id:parkingId},{userId:userId},{ParkingName:ParkingName},{ownerName:ownerName},{status:status},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

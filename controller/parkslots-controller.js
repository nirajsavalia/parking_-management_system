const parkslotsModel = require("../model/parkslots-model")

//add [post]

module.exports.addparkingslots = function(req,res){

    let slotsId = req.body.slotsId
    let parkingId= req.body.parkingId
    let discription = req.body.discription
    
    let parkingslots = new parkslotsModel({
        slotsId: slotsId,
        parkingId: parkingId,
        discription: discription
    })

    parkingslots.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllParkingslots = function (req, res) {

    parkslotsModel.find().populate("slotsId").populate("parkingId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteParkingslots = function(req,res){

    let slotsId = req.params.slotsId
    let parkingId = req.params.parkingId


    parkslotsModel.deleteOne({_id:slotsId},{parkingId:parkingId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updateParkingslots = function(req,res){
    let slotsId = req.body.slotsId
    let parkingId= req.body.parkingId

    parkslotsModel.updateOne({_id:slotsId},{parkingId:parkingId},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

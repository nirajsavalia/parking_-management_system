const OwnerModel = require("../model/owner-model")

//add [post]

module.exports.addOwner = function(req,res){

    let ownerId = req.body.ownerId
    let ownerName = req.body.ownerName
    let ParkingName = req.body.ParkingName
   
   

    let owner = new OwnerModel({
        ownerId: ownerId,
        ownerName: ownerName,
        ParkingName: ParkingName
        
    })

    owner.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllOwner = function (req, res) {

    OwnerModel.find().populate("ownerId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteOwner = function(req,res){
    //params userid 
   let ownerId = req.params.ownerId //postman -> userid 

    OwnerModel.deleteOne({_id:ownerId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updateOwner = function(req,res){
    let ownerId = req.body.ownerId
    let ownerName = req.body.ownerName
    let ParkingName = req.body.ParkingName
   
    OwnerModel.updateOne({_id:ownerId},{ownerName:ownerName},{ParkingName:ParkingName},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

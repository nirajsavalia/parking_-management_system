const parkslotsresModel = require("../model/prkslotres-model")

//add [post]

module.exports.addparkingslots = function(req,res){

    let parkingslotsId = req.body.parkingslotsId
    let userId= req.body.userId
    let slotId = req.body.slotId
    let bookingDate = req.body.bookingDate
    let entryTime = req.body.entryTime
    let exitTime = req.body.exitTime


    
    let prkslotres = new parkslotsresModel({
        parkingslotsId: parkingslotsId,
        userId: userId,
        slotId: slotId,
        bookingDate: bookingDate,
        entryTime: entryTime,
        exitTime: exitTime
    })

    prkslotres.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllPrkslotres = function (req, res) {

    parkslotsresModel.find().populate("parkingslotsId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deletePrkslotres = function(req,res){
    let parkingslotsId = req.params.parkingslotsId


    parkslotsresModel.deleteOne({_id:parkingslotsId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updatePrkslotres = function(req,res){
    let parkingslotsId = req.body.parkingslotsId
    let userId= req.body.userId
    let slotId = req.body.slotId

    parkslotsresModel.updateOne({_id:parkingslotsId},{userId:userId},{slotId:slotId},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

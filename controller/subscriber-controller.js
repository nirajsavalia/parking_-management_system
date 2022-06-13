const subsciberModel = require("../model/subscriber-model")

//add [post]

module.exports.addsubscriber = function(req,res){

    let subscribersId = req.body.subscribersId
    let userId= req.body.userId
    let purchasedate = req.body.purchasedate
    let startdate = req.body.startdate
    let durationInDays = req.body.durationInDays
    let vehicalNo = req.body.vehicalNo


    
    let subscriber = new subsciberModel({
        subscribersId: subscribersId,
        userId: userId,
        purchasedate: purchasedate,
        startdate: startdate,
        durationInDays: durationInDays,
        vehicalNo: vehicalNo
    })

subscriber.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllSubscriber = function (req, res) {

    subsciberModel.find().populate("subscribersId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteSubscriber = function(req,res){
    let subscribersId = req.params.subscribersId

    subsciberModel.deleteOne({_id:subscribersId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updateSubscriber = function(req,res){
    let subscribersId = req.body.subscribersId

    subsciberModel.updateOne({_id:subscribersId},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}

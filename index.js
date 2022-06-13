const express = require("express")
const mongoose = require("mongoose")

const OwnerController = require("./controller/owner-controller")
const ParkingController = require("./controller/parking-controller")
const ParkslipController = require("./controller/parkslips-controller")
const ParkslotsController = require("./controller/parkslots-controller")
const PaymentController = require("./controller/payments-controller")
const PrkslotresController = require("./controller/prkslotres-controller")
const RoleController = require("./controller/role-controller")
const SubscriberController = require("./controller/subscriber-controller")
const UserController = require("./controller/user-controller")

const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/parkingsystem',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{

    console.log("db Connected....");
  }
})

//urls 
 
app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
// app.get("/login",sessionController.login)
// app.get("/signup",sessionController.signup) 
// app.post("/saveuser",sessionController.saveuser)

//owner
app.post("/owner",OwnerController.addOwner)
app.get("/owner",OwnerController.getAllOwner)
app.delete("/owner",OwnerController.deleteOwner)
app.put("/owner",OwnerController.updateOwner)

//parking
app.post("/parking",ParkingController.addparking)
app.get("/parking",ParkingController.getAllParking)
app.delete("/parking",ParkingController.deleteParking)
app.put("/parking",ParkingController.updateParking)


//parkslips
app.post("/prkslip",ParkslipController.addparking)
app.get("/prkslip",ParkslipController.getAllParkingslips)
app.delete("/prkslip",ParkslipController.deleteParkingslips)
app.put("/prkslip",ParkslipController.updateParkingslips)


//parkslots
app.post("/parkingslots",ParkslotsController.addparkingslots)
app.get("/parkingslots",ParkslotsController.getAllParkingslots)
app.delete("/parkingslots",ParkslotsController.deleteParkingslots)
app.put("/parkingslots",ParkslotsController.updateParkingslots)


//payment
app.post("/payment",PaymentController.addparkingslots)
app.get("/payment",PaymentController.getAllPayment)
app.delete("/payment",PaymentController.deletePayment)
app.put("/payment",PaymentController.updatePayment)


//prkslotres
app.post("/prkslotres",PrkslotresController.addparkingslots)
app.get("/prkslotres",PrkslotresController.getAllPrkslotres)
app.delete("/prkslotres",PrkslotresController.deletePrkslotres)
app.put("/prkslotres",PrkslotresController.updatePrkslotres)


//role
app.post("/role",RoleController.addRole)
app.get("/role",RoleController.getAllRoles)
app.delete("/role",RoleController.deleteRole)
app.put("/role",RoleController.updateRole)


//subscriber
app.post("/subscribers",SubscriberController.addsubscriber)
app.get("/subscribers",SubscriberController.getAllSubscriber)
app.delete("/subscribers",SubscriberController.deleteSubscriber)
app.put("/subscribers",SubscriberController.updateSubscriber)

//user
app.post("/user",UserController.addUser)
app.get("/user",UserController.getAllUsers)
app.delete("/user",UserController.deleteUser)
app.put("/user",UserController.updateUser)


//server 

app.listen(3000,function(){
  console.log("server started on 3000");  
})
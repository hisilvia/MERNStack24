const express = require('express') //import package
const orderRouter = express.Router({})
const orderDataModel = require('../DataModel/OrderDataModel');

//Post an order
orderRouter.post("/api/saveUserOrder", (req, res)=>{

    let orderObj = req.body;
    console.log("orderObj: ", orderObj);

    console.log("orderObj.order: ", orderObj.order);
 
    let arrOrder = orderObj.order;
 
     orderObj.amount = arrOrder.reduce( (acc, arrOrder)=>acc + arrOrder.price * arrOrder.qty, 0);
     console.log("orderObj.amount", orderObj.amount);
 
     orderObj.totalAmount = parseFloat((orderObj.amount * 0.9).toFixed(2));
 
     console.log("orderObj.totalAmount", orderObj.totalAmount);
    
    let orderSchemaObj = new orderDataModel(req.body);

    orderSchemaObj.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send("Error Ocurred in orderRoute: " + err);
    });

})

//Get all orders
orderRouter.post("/api/getUserOrder", (req, res)=>{

    orderDataModel.find({userid: req.body.userid})
    .then((order)=>{
        res.send(order)
    })
    .catch((err)=>{
        console.log(err)
        res.send("Error Occurred" + err)
    })
});

//Update orders
orderRouter.patch("/api/saveUserOrder", (req, res)=>{
 
    let orderObj = req.body;
    console.log("orderObj: ", orderObj);
    console.log("orderObj.order: ", orderObj.order);

    // let arrOrder = orderObj.order;

    // orderObj.amount = arrOrder.reduce( (acc, arrOrder)=>acc + arrOrder.price * arrOrder.qty, 0);
    // console.log("orderObj.amount", orderObj.amount);

    // orderObj.totalAmount = orderObj.amount * 0.9;
    // console.log("orderObj.totalAmount", orderObj.totalAmount);

    let orderSchemaObj = new orderDataModel(req.body);

    orderSchemaObj.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send("Error Ocurred in orderRoute: " + err);
    });

})

module.exports = orderRouter;
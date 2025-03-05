const express = require('express') //import package
const orderRouter = express.Router({})
const orderDataModel = require('../DataModel/OrderDataModel');


orderRouter.post("/api/saveUserOrder", (req, res)=>{

    let orderObj = req.body;
    console.log("orderObj: ", orderObj);
    
    let orderSchemaObj = new orderDataModel(req.body);

    orderSchemaObj.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send("Error Ocurred in orderRoute: " + err);
    });

})

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

module.exports = orderRouter;
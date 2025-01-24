const express = require('express') //import package
const orderRouter = express.Router({})
const orderDataModel = require('../DataModel/OrderDataModel');


orderRouter.post("/api/saveUserOrder",(req, res)=>{

    // let cartObj = req.body; //user object passed in the body of sigininup api
    // console.log("cartObj", cartObj)

    // let cartSchemaObj = new cartDataModel({userid: req.body.userid});//for new user

    // cartSchemaObj.findOne().then((cartDbObj)=>{//will get _id once document is created
        
    orderDataModel.findOne({userid: req.body.userid})
        .then((orderDbObj)=>{

        if(!orderDbObj) {  //checks for null cart of given user

            console.log("No orderItems Present, Adding / Inserting!");
            let orderObj = new orderDataModel(req.body);

            orderObj.save().then((data)=>{
                res.json(data);
            }).catch((err)=>{
                res.send("Error Occurred" + err);
            });

        }else {  //update the cart for given user

            console.log("OrderItems Present, Replacing / Updating!");
            orderDbObj.order = req.body.order;  //replacing db cart with cart that user has sent from CartComponent page

            orderDbObj.save()
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.send("Error Occured" + err);
            })
        }
        
        
        
    }).catch((err1)=>{
        console.log("got an error!", err1);
        res.send("error while fetching order!")
    })
})

orderRouter.post("/api/getUserOrder",(req, res)=>{

    orderDataModel.findOne({userid: req.body.userid})//find all the products from products collection and send back
    .then((cart)=>{
        res.json(cart)
    })
    .catch((err)=>{
        console.log(err)
        res.send("Error Occurred" + err)
    })
});

module.exports = orderRouter;
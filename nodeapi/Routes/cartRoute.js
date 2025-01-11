const express = require('express') //import package
//const cartRouter = express.Router({strict:true,caseSensitive: true}) // a separate route table to create and handle our api's
const cartRouter = express.Router({})
const cartDataModel = require('../DataModel/CartDataModel');


cartRouter.post("/api/saveUserCart",(req, res)=>{

    // let cartObj = req.body; //user object passed in the body of sigininup api
    // console.log("cartObj", cartObj)

    // let cartSchemaObj = new cartDataModel({userid: req.body.userid});//for new user

    // cartSchemaObj.findOne().then((cartDbObj)=>{//will get _id once document is created
        
    cartDataModel.findOne({userid: req.body.userid})
        .then((cartDbObj)=>{

        if(!cartDbObj) {  //checks for null cart of given user

            console.log("No cartItems Present, Adding / Inserting!");
            let cartObj = new cartDataModel(req.body);

            cartObj.save().then((data)=>{
                res.json(data);
            }).catch((err)=>{
                res.send("Error Occurred" + err);
            });

        }else {  //update the cart for given user

            console.log("CartItems Present, Replacing / Updating!");
            cartDbObj.cart = req.body.cart;  //replacing db cart with cart that user has sent from CartComponent page

            cartDbObj.save()
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.send("Error Occured" + err);
            })
        }
        
        
        
    }).catch((err1)=>{
        console.log("got an error!", err1);
        res.send("error while fetching cart!")
    })
})

cartRouter.post("/api/getUserCart",(req, res)=>{

    cartDataModel.findOne({userid: req.body.userid})//find all the products from products collection and send back
    .then((cart)=>{
        res.json(cart)
    })
    .catch((err)=>{
        console.log(err)
        res.send("Error Occurred" + err)
    })
});

module.exports = cartRouter;
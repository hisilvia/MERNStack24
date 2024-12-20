const express = require('express')
const productDataModel = require('../DataModel/ProductDataModel');
const productRouter = express.Router({strict:true, caseSensitive:true})

productRouter.post("/api/register",(req, res)=>{

    let productObj = req.body;
    console.log("productObj", productObj)

    productDataModel.findOne({productName:req.body.productName}).then((existingProduct)=>{

        if (existingProduct) {
            res.send(existingProduct)
        }else {
            let productSchemaObj = new productDataModel(req.body);

            productSchemaObj.save().then((newProduct)=>{
                console.log("successful signup ", newProduct);
                res.send(newProduct)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((error)=>{
        console.log("Error while fetching existing user", error)
        res.send("Error while fetching existing user")
    })
})

productRouter.get("/api/products",(req, res)=>{

    productDataModel.find()//find all the users from users collection and send back
    .then((products)=>{
        res.send(products)
    })
    .catch((errr)=>{
        console.log(errr)
        res.send("Error while fetching users")
    })
});

module.exports = productRouter;
const express = require('express') //import package
const orderRouter = express.Router({})
const orderDataModel = require('../DataModel/OrderDataModel');
const cartDataModel = require('../DataModel/CartDataModel');

//Post an order
orderRouter.post("/api/saveUserOrder", (req, res)=>{

    let orderObj = req.body;
    console.log("orderObj: ", orderObj);

    console.log("orderObj.order: ", orderObj.order);
 
    //Calculate amount and total amount
    let arrOrder = orderObj.order;
 
    orderObj.amount = arrOrder.reduce( (acc, arrOrder)=>acc + arrOrder.price * arrOrder.qty, 0);
    console.log("orderObj.amount", orderObj.amount);
 
    orderObj.totalAmount = parseFloat((orderObj.amount * 0.9).toFixed(2));
    console.log("orderObj.totalAmount", orderObj.totalAmount);
    
    /*
    //Calculate the date
    const curTime = new Date().toISOString();
    console.log("curTime: ", curTime);

    const ordTime = new Date(orderObj.date).toISOString();
    console.log("curTime: ", curTime);

    if( (curTime -ordTime) > 48){
        orderObj.status = "Delived";
    }
    */

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

//retrieve the remaining orders after deleting the one
orderRouter.delete("/api/:orderid/cancelOrder", async(req, res)=>{

    try{
        const orderid = req.params.orderid;
        console.log("orderid: ",orderid)

        const order = await orderDataModel.findOneAndUpdate(
        
            {_id: orderid},

            //$set: update data
            {$set: {status: "Cancelled"}},

            //new=false by default return the old data/document, 
            // if new=true, return the modified document rather than the original
            {new: true}
        
        );
        
        console.log("order: ", order);

        if(!order){
            return res.status(404).json({message: 'Order not found'});
        }
     
        
        //await order.save();
        //console.log("order1: ", order);
        

        res.send(order)
        console.log("order2: ", order);
        console.log("==============")
        //res.redirect(`/`)
        
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    };

}) 

//save the deleted one order
orderRouter.put("/api/:orderid", async(req, res)=>{

    try{
        const orderid = req.params.orderid;
        console.log("orderid: ",orderid)

        const order = await orderDataModel.findById(orderid);
        console.log("order2: ", order);

        res.send(order)
        console.log("order3: ", order);
        
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    };

}) 

//Cancel order by orderId and push the deleted one in the cart
//Issue: the old data is lost after pushing data in the cart again
/*
orderRouter.delete("/api/:orderid/cancelOrder", async(req, res)=>{
    try{
        const orderid = req.params.orderid;
        console.log("orderid: ",orderid)

        const order = await orderDataModel.findById(orderid);
        console.log("order: ", order);
        
        if(!order){
            return res.status(404).json({message: 'Order not found'});
        }
        /
        if (order.status !== "Pending") {
            return res.status(400).json({ error: "Only pending orders can be cancelled" });
        }
       /
        order.status = "Cancelled";
        //await order.save();

        
        //Extract product IDs from the orderid
        // const productIds = order.order.map((item)=>item.id)
        //console.log("productIds: ", productIds);
        



        //Retrieve all products in the cart from the same user
        let userCart = await cartDataModel.findOne({userid: order.userid});
        console.log("userCart: ", userCart);

        if(!userCart){
            userCart = new cartDataModel({userid:order.userid, cart: []});
            
        }

        //Add order items to cart
        order.order.forEach((item) => {
            const productId = item._id
            console.log("productId: ", productId)
            
            const existCartItem = userCart.cart.find(cartItem=>cartItem.name === (item.name));
            console.log("existCartItem: ", existCartItem)

            if(existCartItem){
                existCartItem.qty += item.qty;
            }else{
                userCart.cart.push({name: item.name, desc: item.desc, rating: item.rating, price: item.price, qty: item.qty})
                console.log("")
            }
                
        });

        
        //Delete the order
        await orderDataModel.findByIdAndDelete(orderid);
        //await order.save()
        userCart = await userCart.save();
        console.log("userCart: ", userCart)
        res.status(200).json({ message: 'Order moved to cart successfully', order: order });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    };

})
*/
module.exports = orderRouter;
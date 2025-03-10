let mongooseObj = require("mongoose");   //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack24 or opens a connection if already present
mongooseObj.connect("mongodb+srv://smatthews:12345@cluster0.32ftxoe.mongodb.net/mernstack24"); 


let orderSchema = new schemaObj({

    userid: {type:String, required:true},
    date: {type:Date, default:Date.now},
    amount: {type:Number, default:0},
    discount:{
        type: {
            code: { type: String, default: null }, // Discount code, defaulting to null
            percentage: { type: Number, default: 0, min: 0, max: 100 }, // Discount percentage, default to 0
          },
          default: null,
    },
    totalAmount: {type:Number, default:0},
    status: { type: String, default: 'Pending' }, 
    order: {type:Array, required:true},
    
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
})

let OrderModel = mongooseObj.model("order", orderSchema);//user - collection name, pluralised by mongodb

module.exports = OrderModel; //with capability to retrieve save udpate queries with mongo db
let mongooseObj = require("mongoose");   //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack24 or opens a connection if already present
mongooseObj.connect("mongodb+srv://smatthews:12345@cluster0.32ftxoe.mongodb.net/mernstack24"); 

let cartSchema = new schemaObj({
    userid: {type:String, required:true},
    cart: Object
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
})

let CartModel = mongooseObj.model("cart", cartSchema);//user - collection name, pluralised by mongodb

module.exports = CartModel; //with capability to retrieve save udpate queries with mongo db
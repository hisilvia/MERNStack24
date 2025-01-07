let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack19 or opens a connection if already present
mongooseObj.connect("mongodb+srv://smatthews:12345@cluster0.32ftxoe.mongodb.net/mernstack24"); 

let productSchema = new schemaObj({
    name : {type: String, required : true},
    desc: {type:String, required : true},
    rating: String,
    price: Number,
    qty: {type: Number, default: 1}
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let ProductModel = mongooseObj.model("product", productSchema);//user - collection name, pluralised by mongodb

module.exports = ProductModel; //with capability to retrieve save udpate queries with mongo db
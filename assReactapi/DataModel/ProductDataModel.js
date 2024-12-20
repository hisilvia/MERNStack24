let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb+srv://smatthews:12345@cluster0.32ftxoe.mongodb.net/mernstack24");

let productSchema = new schemaObj({
    productName: {type: String, required: true},
    price: {type:Number, required: true},
    desc: {type: String},
    rating: {type:Number}
}
// ,{
//     versionKey: true //false - set to false then it wont create in mongodb
// }
)

let ProductModel = mongooseObj.model("product", productSchema);
module.exports = ProductModel;
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack24 or opens a connection if already present
mongooseObj.connect("mongodb+srv://smatthews:12345@cluster0.32ftxoe.mongodb.net/mernstack24"); 
        //mongodb+srv://smatthews:12345@cluster0.32ftxoe.mongodb.net/myFinal

let studentSchema = new schemaObj({
    studentName : {type: String, required : true},
    major: {type:String, required : true}
    
}
//,
// {
//     versionKey: false //false - set to false then it wont create in mongodb
// }
)

let StudentModel = mongooseObj.model("student", studentSchema);//user - collection name, pluralised by mongodb

module.exports = StudentModel; //with capability to retrieve save udpate queries with mongo db
const express = require('express') //import package
const studentRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const studentDataModel = require('../DataModel/StudentDataModel');
//const userDataModel = require('../DataModel/UserDataModel');



studentRouter.post("/api/signinup",(req, res)=>{

    let studentObj = req.body; //user object passed in the body of sigininup api
    console.log("studentObj",studentObj)

    studentDataModel.findOne({studentName:req.body.studentName}).then((existingStudent)=>{
        
        if(existingStudent){//user exists so send the user details - sign in
            
            res.send(existingStudent)            
        }
        else//user doesn't exists so create one and create one - sign up
        {
            let studentSchemaObj = new studentDataModel(req.body);//for new user

            studentSchemaObj.save().then((newStudent)=>{//will get _id once document is created
                console.log("successful signup ", newStudent);
                res.send(newStudent) //{userName : "value"....}
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

studentRouter.get("/api/students",(req, res)=>{

    studentDataModel.find()//find all the users from users collection and send back
    .then((students)=>{
        res.send(students)
    })
    .catch((errr)=>{
        console.log(errr)
        res.send("Error while fetching users")
    })
});

module.exports = studentRouter;
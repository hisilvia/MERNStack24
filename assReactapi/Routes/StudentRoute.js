const express = require('express') //import package
const studentDataModel = require('../DataModel/StudentDataModel');
const studentRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's

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

studentRouter.post("/api/addHobby", async(req, res)=>{
    
    let hobbyObj = req.body;
    console.log("hobbyObj in Route: ", hobbyObj)

    studentDataModel.findOne({studentName: req.body.studentName}).then((existingStudent)=>{

        if(existingStudent){
            existingStudent.hobbies = req.body.hobbies;
            res.send(hobbyObj.hobbies)
        }else{
            return res.status(404).json({ message: "Student doesnt exist" });
        }

    }).catch((error)=>{
        console.log("Error while saving hobby", error)
        res.send("Error while saving hobby.")
    })
   
});

studentRouter.get("/api/hobbies", (req, res)=>{
    const studentName = req.query.studentName;

    try {
        const student = studentDataModel.findOne({ studentName});
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student.hobbies);
    }catch (error) {
        res.status(500).json({ message: "Error fetching hobbies", error });
    }
})
module.exports = studentRouter;
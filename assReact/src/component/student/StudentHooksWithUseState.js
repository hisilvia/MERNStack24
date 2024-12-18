import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudentToStore, SaveStudentToDBUsingFetch, SaveStudentToDBUsingAxios } from "../../state/StudentActions";

let StudentHooksWithUseState = (props) => {
    
    let student = useSelector((store) => store.StudentReducer.student)
    console.log(student);

    let dispatcher = useDispatch();

    let [sName, setStudentName] = useState(student.setStudentName)
    let [major, setMajor] = useState(student.major)


    let onTextChange = (evt)=>{
        let val = evt.target.value
        setStudentName(val)
        evt.preventDefault()
    }

    //Connect DB
    let loginStudent = (evt)=>{
        let studentObj = {
            studentName: sName,
            major
        }

        alert(JSON.stringify(studentObj))
        dispatcher(SaveStudentToDBUsingAxios(studentObj))

        evt.preventDefault();
    }

    return (
        <>
            <h1>Student Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Student Name</b>
                        <input type="text" className="form-control col-md-6 username" 
                                value={sName} //state to update the userName
                            placeholder="Student Name" onChange={onTextChange} maxLength={40}/>
                    </div>
                    
                        
                    <div className="col-md-12">
                        <b>Major </b>
                        <input type="text" className="form-control col-md-6 mobile" 
                            value={major} placeholder="Major" maxLength={11}
                            onChange={(evt)=>setMajor(evt.target.value)} />
                    </div>
                    <input type="submit" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginStudent}/>
                </div>
            </section>
        
        
        
        
        </>
    )

}
export default StudentHooksWithUseState;

import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudentToStore, SaveStudentToDBUsingFetch, SaveStudentToDBUsingAxios } from "../../state/student/StudentActions";
import StudentAddHobby from './StudentAddHobby';
import { useNavigate } from 'react-router-dom'
import { addHobbyToDB, fetchHobbiesFromDB } from '../../state/student/StudentActions'

let StudentHooksWithUseState = (props) => {
    
    let student = useSelector((store) => store.StudentReducer.student);
    let studentHobbies = useSelector((store) => store.StudentReducer.student.hobbies || []);

    console.log("studentName: ", student.studentName);
    console.log("studentHobbies", studentHobbies)

    let dispatcher = useDispatch();

    let [sName, setStudentName] = useState(student.setStudentName)
    let [major, setMajor] = useState(student.major)
    let [hobby, setHobby] = useState("")
    let [selectedHobby, setSelectHobby] = useState("");

    let onTextChange = (evt)=>{
        let val = evt.target.value
        setStudentName(val)
        evt.preventDefault()
    }

    //Connect DB
    let loginStudent = (evt)=>{
        let studentObj = {
            studentName: sName,
            major,
           
        }
        if( !studentObj.studentName || !studentObj.major) {
            alert("Please sign in!");
            return;
        }

        alert(JSON.stringify(studentObj));
        dispatcher(SaveStudentToDBUsingAxios(studentObj));

        //navigate('/addHobby');
        evt.preventDefault();
    }

    let addHobby = () => {
        if (hobby.trim()){
            dispatcher(addHobbyToDB(student.studentName, hobby));
            setHobby("");
        }else {
            alert("Please enter a hobby.");
        }
    }

    //when the student logs in, need to fetch hobbies
    useEffect(() =>{
        if (student.studentName){
            dispatcher(fetchHobbiesFromDB(student.studentName));
        }
    },[])
    // let handleGoToCheckoutClick = () =>{
    //     navigate('/addHobby');
    // }

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
                        <b>Major</b>
                        <input type="text" className="form-control col-md-6 mobile" 
                            value={major} placeholder="Major" maxLength={11}
                            onChange={(evt)=>setMajor(evt.target.value)} />
                    </div>

                    <input type="submit" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginStudent}/>             
                </div>
            </section>
           
            {student.studentName ? 
             <div>
                <h2>Hobby List</h2>
                <section>
                    <div>
                        <div>
                            <h3>Hobby Management</h3>
                            <b>Add a Hobby</b>
                            <input type = "text" placeholder="Enter a hobby" value={hobby || ''}
                                onChange={(evt) => setHobby(evt.target.value)}/>
                            <button onClick={addHobby}>Add</button>
                            {hobby}
                        </div>
                        <div>
                            <b>Your hobbies</b>
                            <select value={selectedHobby || ''} onChange={(evt) => setSelectHobby(evt.target.value)}>
                                <option value="" disabled>Select a hobby</option>
                                {studentHobbies.map((sh, index)=>(
                                    <option key={index} value={sh}>{sh}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

             </div>
            
            : ""}
            
           
        </>
    )

}
export default StudentHooksWithUseState;

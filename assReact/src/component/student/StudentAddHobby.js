import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHobbyToDB, fetchHobbiesFromDB } from '../../state/student/StudentActions'

let StudentAddHobby = ()=>{

    let student = useSelector((state) => state.StudentReducer.student)
    let studentHobbies = useSelector((state) => state.StudentReducer.student.hobbies || [])

    console.log("student", student);
    console.log("studentHobbies", studentHobbies)

    let dispatcher = useDispatch();

    let [hobby, setHobby] = useState("");
    let [selectedHobby, setSelectHobby] = useState("");

    useEffect(()=>{
        if(student.studentName) {
            dispatcher(fetchHobbiesFromDB(student.studentName));
        }
    },[dispatcher,student.studentName])

    let addHobby = () => {
        if (hobby.trim()){
            dispatcher(addHobbyToDB(student.studentName, hobby));
            setHobby("");
        }else {
            alert("Please enter a hobby.");
        }
    }

    return (
        <>
            <div>
                <h3>Hobby Management</h3>
                <b>Add a Hobby</b>
                <input type = "text" placeholder="Enter a hobby" value={hobby}
                    onChange={(evt) => setHobby(evt.target.value)}/>
                <button onClick={addHobby}>Add</button>

            </div>
            <div>
                <b>Your hobbies</b>
                <select value={selectedHobby} onChange={(evt) => setSelectHobby(evt.target.value)}>

                    {studentHobbies.map((sh, index) => (
                        <option key={index} value={sh}>{sh}</option>
                    ))}
                </select>
            </div>
        
        </>
    )
}
export default StudentAddHobby;
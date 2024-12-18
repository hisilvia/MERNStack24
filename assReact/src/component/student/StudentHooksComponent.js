import React, {userState, userRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudentToStore } from '../../state/StudentActions';


let StudentHooksComponent = (props) => {

    let student = useSelector((store)=>store.StudentReducer.student)
    console.log(student);

    let studentName = userRef(null);

    useEffect(() => {

        studentName.current.value = student.studentName;

        return ()=>{
            console.log("Component Unmounted")     
        }
    },[])
    
    let dispatcher = useDispatch();

    let updateToStore = (evt) => {

        let student = { studentName: studentName.current.value };
        alert(JSON.stringify(user))

        dispatcher(AddStudentToStore(student));
        evt.preventDefault()
    }

    return (
        <>
            <input type="text" placeholder="Please type studentName" ref={studentName} maxLength={20} />
            
            <button onClick={updateToStore}>Submit</button>
        
        
        </>
    )
}
export default StudentHooksComponent;
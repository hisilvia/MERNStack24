import React, {useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudentToStore, SaveStudentToDBUsingFetch } from '../../state/student/StudentActions';


let StudentHooksWithUseRef = (props) => {

    let student = useSelector((store)=>store.StudentReducer.student)
    console.log(student);

    let studentName = useRef(null);
    let major = useRef(null);

    useEffect(() => {

        studentName.current.value = student.studentName;
        major.current.value = student.major;

        return ()=>{
            console.log("Component Unmounted")     
        }
    },[])
    
    let dispatcher = useDispatch();

    let updateToStore = (evt) => {

        //let student = { studentName: studentName.current.value };

        let studentObj = {
            studentName: studentName.current.value,
            major: major.current.value
        }

        alert(JSON.stringify(studentObj))

        //dispatcher(AddStudentToStore(studentObj));
        dispatcher(SaveStudentToDBUsingFetch(studentObj))
        evt.preventDefault()
    }

    return (
        <>
            <h1>Student Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Student Name</b>
                        <input type="text" placeholder="Please type studentName" ref={studentName} maxLength={20} />
                    </div>
                    
                        
                    <div className="col-md-12">
                        <b>Major </b>
                        <input type="text" placeholder="Please type major" ref={major} maxLength={20} />
                    </div>
                    <input type="submit" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} onClick={updateToStore}/>
                </div>
            </section>

        </>
    )
}
export default StudentHooksWithUseRef;
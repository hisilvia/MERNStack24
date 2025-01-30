import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayItem from "./DisplayItem";

let Display = ()=>{

    let students = useSelector((state)=>state.StudentReducer.students)
    console.log("students: ", students);

    let dispatch = useDispatch();

    useEffect(()=>{
        students && students.length == 0 ?dispatch(fetchStudents()) : []
    },[])

    return(
        <>
            {/* {
                students && students.length > 0 
                ?
                students.map((item)=>{
                    return <DisplayItem student={id} key={item._id} />
                })
                :
                <h5>No student to display</h5>
            } */}
            <h5>Nothing</h5>
        </>
    )
}
export default Display;
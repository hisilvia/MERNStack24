//defines user actions which contains action type and payload for each action creator to dispatch to store
import * as actionTypes from "./ActionTypes";
import axios from "axios";

//action accepts payload value/object to be used in user reducer switch
export const AddStudentToStore = (student)=>{
    return {
        type : actionTypes.ADD_STUDENT_TO_STORE,
        payload : student
    }
}


//need to make a ajax - asynchronous javascript like xml - be used to make parallel server/api calls
//React.fetch() - we can use to make API or can add axios library to achieve the same

export const SaveStudentToDBUsingFetch = (studentObj)=>{
    console.log("SaveStudentToDBUsingFetch called")
    return (dispatch)=>{
        window.fetch("http://localhost:9000/student/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            body : JSON.stringify(studentObj)}) //JSON object can't travel from client to server so needs to be converted to string
            .then((response)=>response.json())
            .then((studentData)=>{
                console.log(studentData)
                //dispatch or send saved/signin user to reducer
                dispatch(AddUserToStore(studentData))
            })
            .catch((error)=>console.log(error))
        }
}

export const SaveStudentToDBUsingAxios = (studentDataObj)=>{
    console.log("SaveStudentToDBUsingAxios called")
    return (dispatch)=>{
        axios.post("http://localhost:9000/student/api/signinup",//uri or end point of singninup api
            userObj // the user state object we dispatch from the user component
        ).then((collection)=>{
            let loggedStudent = collection.data
            console.log(loggedStudent)
            dispatch(AddStudentToStore(loggedStudent))
        })
        .catch((error)=>console.log(error))
    }
}
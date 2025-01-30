import React, { Component } from "react";
import { connect } from "react-redux";
import { AddStudentToStore } from "../../state/student/StudentActions";
import StudentComponent from "./StudentComponent";

//mapstatetoprops -- allows component to become subscriber

let mapStateToProps = (store) => { //store is the redux states
    return {
        student : store.StudentReducer.student
    //user - will be accessed as props.user in component which is a UserReducer
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch)=>{
    return {
        addStudent : (student=>{
            dispatch(AddStudentToStore(student))
        })
       
    }
}


//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)
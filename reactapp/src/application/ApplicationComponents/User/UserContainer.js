import React, { Component } from "react";
import { connect } from "react-redux";
import { AddUserToStore } from "../../State/User/UserActions";
import UserComponent from "./UserComponent";

//mapstatetoprops -- allows component to become subscriber

let mapStateToProps = (store) => { //store is the redux states
    return {
        user : store.UserReducer.user
    //user - will be accessed as props.user in component which is a UserReducer
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (user)=>{
            dispatch(AddUserToStore(user))
        }
    }
}


//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
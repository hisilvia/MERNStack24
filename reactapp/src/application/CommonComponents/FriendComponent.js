import React from "react";
import MyComponent from "./HomeComponent";

//Children component --> MyComponent is a parent
export default function Friend(props){

    // let friendName = "Jannifer";
    // let friendAddress = "702 Wentzvill. MO";
    // let friendMajor = "Account"

    return (
        <>
            <h2>This is my friend component page </h2>
            <h2>This name we are getting from parent: </h2>
            <p>Name: {props.myInfo.name}</p>
            <p>Address: {props.myInfo.address}</p>
            <p>Major: {props.myInfo.major}</p>
        
        </>
    )
        
}
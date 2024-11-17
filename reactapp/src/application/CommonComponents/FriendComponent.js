import React from "react";
import MyComponent from "./HomeComponent";

export default function Friend(props){

     let friendName = "Jannifer";
    // let friendAddress = "702 Wentzvill. MO";
    // let friendMajor = "Account"

    return (
        <>
            <h2>This is my friend component page </h2>
            <h2>This name we are getting from parent - {props.myName}</h2>
            {/* <h3><MyComponent myName={friendName} /></h3> */}
            
            
        </>
    )
        
}
import React from "react";
import SuccessStory from "./SuccessStory";


//Children component --> MyComponent is a parent
export default function SuccessChild(props){

    let topic ="The River ";
    let name1 = "Angel"

    return (
        <>
            <h2>The below information comes from SuccessChild</h2>
            <h1>************start*******************</h1>
            <h4>This name we are getting from PARENT: </h4>
            <p>Name: {props.myInfo.name}</p>
            <p>Address: {props.myInfo.address}</p>
            
            <h4>The information below comes from SuccessStory in SuccessChild</h4>
            <SuccessStory title={topic} author= {name1}/>
           
            <h1>************end*******************</h1>

        
        </>
    )
        
}
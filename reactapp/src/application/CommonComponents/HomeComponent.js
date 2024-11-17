//task - 15th Nov
//create a component with your name - as class component, import it in app.js
//create another component with your best friend name and import it in your component name create at step #1
//in your name component create some data like your dummy address and education info
//pass this data as an object to friends component and show it there

//bonus question
//try updating the data on a upate button click and see if it also shows on friends name component

import React, {Component} from "react";
import Friend from "./FriendComponent";

export default function MyComponent(props){
    let myName = "Silvia";
    let myAddress = "Dogwood Creek Dr. MO";
    let myMajor = "CS"

    return (
        <>
            <h2>This is my home component page </h2>
            <h3>My Name: {myName}</h3>
            <h3>My Address: {myAddress}</h3>
            <h3>My Major: {myMajor}</h3>
            {/* <h2>This name we are getting from parent - {props.friendName}</h2> */}
            <Friend />
            
        </>
    )
}


/*
export class MyComponent extends Component{
    constructor() {
        super();
        this.state = {
            name: "Silvia",
            address: "Dogwood Creek Dr. MO",
            major: "CS"
        }
    }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        this.setState({
           name : "Jannifer",
           address: "702 Wentzvill. MO",
           major: "Account"

        })
       
        evt.preventDefault();
    }

    render() {
        return (
            <>
            <div>
               <Friend />
            </div>
            <div>
                
            </div>
        </>
        )
        
    }

}
*/
















//create a home component and display information about use here //at least 5 and use it in app.js
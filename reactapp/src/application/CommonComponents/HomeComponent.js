//task - 15th Nov
//create a component with your name - as class component, import it in app.js
//create another component with your best friend name and import it in your component name create at step #1
//in your name component create some data like your dummy address and education info
//pass this data as an object to friends component and show it there

//bonus question
//try updating the data on a upate button click and see if it also shows on friends name component

import React, {Component} from "react";
import Friend from "./FriendComponent";

//Parent component
/*
export default function MyComponent(props){
    const info = {
        name: "Silvia",
        address: "Dogwood Creek Dr. MO",
        major: "CS"
    }
    

    return (
        <>
            <h2>This is my home component page </h2>           
            <Friend myInfo={info}/>
        </>
    )
}
*/


export default class MyComponent extends Component{
    constructor() {
        super();
        this.state = {
            info: {
                name: "Silvia",
                address: "Dogwood Creek Dr. MO",
                major: "CS"
            }
            
        }
    }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        this.setState({
            info: {
                name : "Jannifer",
                address: "702 Wentzvill. MO",
                major: "Account"
            }
           

        })
       
        evt.preventDefault();
    }

    render() {
        return (
            <>
            <div>
                <h2>This is my home component page </h2> 
                <Friend myInfo={this.state.info}/>
            </div>
            <div>
                <button onClick={this.onclick}>Change Info</button>
            </div>
        </>
        )
        
    }

}

















//create a home component and display information about use here //at least 5 and use it in app.js
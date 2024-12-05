import React, {Component, useState} from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
//import "./app.css";

//Parent component
export default class Success extends Component{

    constructor() {
        super();
        this.state = {
            info: {
                name: "Lilly",
                address: "Dogwood Creek Dr. MO"
            },
            
            randomValue: "random"
        }
    }

    changeRandomValue = (newValue) => {
        this.setState({
            randomValue: newValue
        }) 
    }

   

    render() {
        return (
            <>
            <div>
                <h2>This is SUCCESS component page </h2> 
                <h3>Name: {this.state.info.name}</h3>
                <h3>Address: {this.state.info.address}</h3>
                <hr/>
                <SuccessChild myInfo={this.state.info}/>   
                <hr/>
            </div>
            <div>  
                <h3>{this.state.randomValue}</h3>
                <SuccessStory callBackEvent={this.changeRandomValue} />
                
            </div>
            
        </>
        )
        
    }

}
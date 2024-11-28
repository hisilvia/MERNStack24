//Date: 2024-11-26
//1. Create a page with name, topics discussed
//2. Create a route to render this page, Topics
//3. When you click on the First Topic it should take you to another page, with name TopicDetails with some random information
//4. We need to display 5 Topics <Webpack, React, Router, VirtualDom,PropTypes>

//Date: 2024-11-27
//Q1.In the Topic component print each life cycle method and show the usage of each in log or by comment. 
//Q2.Create an example of route table using route param for TopicDetail component. <as we did for about/5000>-->About.js
//Q3.Show the example of force update with state -->handleReactClick()
//Q4 Create a functional component and by using useState try changing data, take an example of yours -->About.js

import React, {Component, useState} from "react";
import { useParams } from "react-router-dom";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topicName: "Home",
            date: "2024-10-18"
        }

        this.newTopic = "Life cycle methods of React"
    }


    handleWebpackClick = (evt)=>{
        console.log("Webpack page")
        this.setState({
            topicName: "Webpack"
        })


        evt.preventDefault();
    }

    handleReactClick = (evt)=>{
        console.log("React page")
        // this.setState({
        //     topicName: "React"
        // })

        this.state.topicName = "React";
        this.forceUpdate();

        evt.preventDefault();
    }

    handleRouterClick = (evt)=>{
        console.log("Router page")

        //let useparams = useParams();


        this.setState({
            topicName: "Router"
        })


        evt.preventDefault();
    }

    handleVirtualDOMClick = (evt)=>{
        console.log("VirtualDom page")
        this.setState({
            topicName: "Virtual DOM"
        })


        evt.preventDefault();
    }

    handlePropTypesClick = (evt)=>{
        console.log("PropTypes page")
        this.setState({
            topicName: "Default PropTypes"
        })


        evt.preventDefault();
    }

    componentDidMount(){
        console.log("componentDidMount method is called")

        setTimeout(() => {
            this.newTopic = "componentDidMount method"
        }, 3000);
    }


    shouldComponentUpdate(nextPops, nextState){
        console.log("shouldComponentUpdate method is called")
        // console.log("nextPops ", nextPops)
        // console.log("nextState ", nextState)
        // console.log("this.state.first =", this.state.firstName)
        // console.log("nextState.firstName =", nextState.firstName)

        if (this.state.topicName == nextState.topicName ) {
            return false // should not call render method to create virtual dom - as no change in firstName
        } else {
            return true // keep calling render method     
        }
    }

     //update life cycle methods called after render
     getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        // console.log("prevState", prevState);
        // console.log("prevProps", prevProps);


        // this.prevUser = prevState.user;
        // this.setState({
        //     user : this.prevUser
        // })

        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        // console.log("prevState",prevState);
        // console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    //destruction
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
        //clearInterval(this.incrementAgeLoop)
    }

    

    render () {
        return (

            

            <>
                <h2>{this.state.topicName}</h2>

                <button onClick={this.handleWebpackClick}>WebPack</button>
                <button onClick={this.handleReactClick}>React</button>
                <button onClick={this.handleRouterClick}>Router</button>
                <button onClick={this.handleVirtualDOMClick}>Virtual Dom</button>
                <button onClick={this.handlePropTypesClick}>PropTypes</button>
                
            
            </>
        )
    }
}
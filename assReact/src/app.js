import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Success from "./component/Success";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UserSignIn from "./component/UserSignIn";
import SuccessStory from "./component/SuccessStory";
import Lifecyle from "./component/Lifecyle";
import SuccessChild from "./component/SuccessChild";

export default class Application extends React.Component {

    constructor(props) {
        super(props);  //is used to passback data <props -here> so that its udpated in base object for react framework

        //state - object is used to allow updation of values via react rendering life cycle
        this.state = {
            user: "Silvia",      
        }
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
  
        return(

            <>
               <div>  Hey This Is My React Accessment.</div>

                <Router>
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Success user={this.state.user}/>}/>
                            <Route path="success" element={<Success />}/>
                            {/* <Route path="child" element={<SuccessChild />}/> */}
                            <Route path="sign" element={<UserSignIn />}/>
                            <Route path="story" element={<SuccessStory />}/>
                            <Route path="lifecyle" element={<Lifecyle />}/>
                        </Routes>
                    <Footer/>
                </Router>
            </>
            
       )
    }
}
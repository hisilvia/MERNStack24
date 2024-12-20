import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Success from "./component/success/Success";
import Header from "./component/success/Header";
import Footer from "./component/success/Footer";
import UserSignIn from "./component/success/UserSignIn";
import SuccessStory from "./component/success/SuccessStory";
import Lifecyle from "./component/success/Lifecyle";
import SuccessChild from "./component/success/SuccessChild";

import StudentComponent from "./component/student/StudentComponent";
import StudentHooksWithUseRef from "./component/student/StudentHooksWithUseRef";
import StudentHooksWithUseState from "./component/student/StudentHooksWithUseState";
import ProductComponent from "./component/product/ProductComponent";

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
               <div>  Hey {this.state.user}, This Is My React Accessment.</div>

                <Router>
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Success user={this.state.user}/>}/>
                            <Route path="success" element={<Success />}/>
                            {/* <Route path="child" element={<SuccessChild />}/> */}
                            <Route path="login1" element={<StudentComponent />}/>
                            <Route path="login2" element={<StudentHooksWithUseRef />}/>
                            <Route path="login3" element={<StudentHooksWithUseState />}/>
                            <Route path="sign" element={<UserSignIn />}/>
                            <Route path="product" element={<ProductComponent />}/>
                            <Route path="story" element={<SuccessStory />}/>
                            <Route path="lifecyle" element={<Lifecyle />}/>
                        </Routes>
                    <Footer/>
                </Router>
            </>
            
       )
    }
}
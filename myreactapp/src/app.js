import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";



export default class Application extends React.Component {

    constructor(props) {
        super(props);  //is used to passback data <props -here> so that its udpated in base object for react framework

        //state - object is used to allow updation of values via react rendering life cycle
        this.state = {

            user: "Silvia",
            topics: {
                webpack: "webpack configuration",
                react: "react application",
                router: "navigation Router",
                virtualdom: "diff in virtualdom",
                proptypes: "default proptypes"
            }
        }
    }

    

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render from app.js file is called!! ", this.state.user)
        
        return(

            <>
                <div>  Hey this is my practice app.</div>

                <Router>
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user}/>}/>
                            <Route path="home" element={<Home />}/>
                            <Route path="about" element={<About />}/>
                            <Route path="about/:id" element={<About />} />
                            
                            {/* <Route path="*" element={<NotFound />}/> */}

                        </Routes>
                    <Footer/>
                </Router>
            </>
            
       )
    }
}
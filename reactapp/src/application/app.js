import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import { AppCopy } from "./CommonComponents/AppCopy";
import Me  from "./CommonComponents/MyComponent";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import PracticeLifeCycle from "./CommonComponents/PracticeLifeCycle";
import UserComponent from "./ApplicationComponents/User/UserComponent";
import UserHooksWithUseRef from "./ApplicationComponents/User/UserHooksWithUseRef";
import UserHooksWithUseState from "./ApplicationComponents/User/UserHooksWithUseState";
import ProductComponent from "./ApplicationComponents/Product/ProductComponent";
import CartComponent from "./ApplicationComponents/Cart/CartComponent";


export default class Application extends React.Component {

    constructor(props) {
        super(props);  //is used to passback data <props -here> so that its udpated in base object for react framework

        //state - object is used to allow updation of values via react rendering life cycle
        this.state = {
            userName: "Duncan",
            user: {
                address: "Somewhere on earth",
                session: "Somewhere on webex"
            }
        }
    }

    

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render is called!! ", this.state.userName)
        
        return(
            <Router>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home user={this.state.user}/>}/>
                        <Route path="home" element={<Home />}/>
                        {/* <Route path="login1" element={<UserComponent />}/>
                        <Route path="login2" element={<UserHooksWithUseRef />}/> */}
                        <Route path="login3" element={<UserHooksWithUseState />}/>
                        {/* <Route path="login" element={<UserContainer/>}/> */}
                        {/* <Route path="app" element={<AppCopy />} /> */}
                        <Route path="product" element={<ProductComponent />} />
                        <Route path="cart" element={<CartComponent />} />
                        {/* <Route path="about" element={<About />} />
                        <Route path="about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />}/>
                        <Route path="me" element={<Me />} />
                        <Route path="lifecycle" element={<PracticeLifeCycle />} /> */}
                    </Routes>
                <Footer/>
            </Router>
       )
    }
}
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = props.user;
    }

    render() {

        return (
            <>
                {/* <h2>Hi {this.author} , Welcome to my header page</h2> */}
            
                <div>
                    <NavLink to="/success"  className="button" activeclassname="true"> Success </NavLink>
                    <NavLink to="/login1"  className="button" activeclassname="true"> Student1 </NavLink>
                    <NavLink to="/login2"  className="button" activeclassname="true"> Student2 </NavLink>
                    <NavLink to="/login3"  className="button" activeclassname="true"> Student3 </NavLink>
                    
                    {/* <NavLink to="/child"  className="button" activeclassname="true"> Child</NavLink> */}
                    <NavLink to="/sign"  className="button" activeclassname="true"> Sign </NavLink>
                    <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>
                    {/* <NavLink to="/story"  className="button" activeclassname="true"> Story</NavLink> */}
                    <NavLink to="/lifecyle"  className="button" activeclassname="true"> Methods </NavLink>
                    {/* <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink> */}
                    {/* <NavLink to="/webpack"  className="button" activeclassname="true"> Mywebpack </NavLink>
                    <NavLink to="/react"  className="button" activeclassname="true"> Myreact </NavLink>
                    <NavLink to="/router"  className="button" activeclassname="true"> Myrouter</NavLink>
                    <NavLink to="/vdom"  className="button" activeclassname="true"> Myvdom </NavLink>
                    <NavLink to="/ptypes"  className="button" activeclassname="true"> Myptypes </NavLink> */}
                </div>
                <hr/>
            
            </>
        )
    }
}


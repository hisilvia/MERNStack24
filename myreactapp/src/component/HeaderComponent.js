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
                <h2>Hi {this.author} , Welcome to my page</h2>
            
                <div>
                    <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                    <NavLink to="/webpack"  className="button" activeclassname="true"> Mywebpack </NavLink>
                    <NavLink to="/react"  className="button" activeclassname="true"> Myreact </NavLink>
                    <NavLink to="/router"  className="button" activeclassname="true"> Myrouter</NavLink>
                    <NavLink to="/vdom"  className="button" activeclassname="true"> Myvdom </NavLink>
                    <NavLink to="/ptypes"  className="button" activeclassname="true"> Myptypes </NavLink>
                </div>
                <hr/>
            
            </>
        )
    }
}


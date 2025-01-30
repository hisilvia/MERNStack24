import React, { Component } from "react";


export default class UserSignIn extends Component {

    constructor(props){
        super(props);
       
        this.refUserName = React.createRef();
        this.refRole = React.createRef();
    }

    handleSubmit = (evt)=>{

        let userName = this.refUserName.current.value
        let role = this.refRole.current.value

        alert('A username was submitted: ' + userName+'\n'
             + 'A role was submitted: ' + role);

        evt.preventDefault();
    }

    render() {
        

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" ref={this.refUserName} placeholder="Default"/>
                    </label>
                    <br/>
                    <label>
                    Role:
                    <input type="text" ref={this.refRole} placeholder="Staff"/>
                    </label>
                    <br/>
                    
                    <input type="submit" value="Submit" />
                </form>


            </>
        )
    }
}
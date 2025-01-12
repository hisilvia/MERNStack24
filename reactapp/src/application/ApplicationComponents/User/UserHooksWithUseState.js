//hooks are the independent functions build perform the tasks we have to do with states, reducers etc
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AddUserToStore, SaveUserToDBUsingFetch, SaveUserToDBUsingAxios } from "../../State/User/UserActions";


let UserHooksWithUseState =(props) => {

    //to subscribe we need to implement - mapStateToProps and its equivalent hook is useSelector
    let user = useSelector((store)=>store.UserReducer.user)
    console.log(user);


    //to make component a publisher we need to implement mapDispatch to props - useDispatch
    let dispatcher = useDispatch();


    // initializes state and returns a callback which we can use to update the state
    let [uName, setUserName] = useState(user.userName) //user.userName - defined in userReducer 
    let [pass, setPassword] = useState(user.password)
    let [street, setStreet] = useState(user.street)
    let [mobile, setPhone] = useState(user.mobile) 

    let onTextChange =(evt)=>{
        let val = evt.target.value
        setUserName(val)
        evt.preventDefault()
    }

    //conect DB
    let loginUser = (evt)=>{
        let userObj = {
            userName : uName,
            password : pass,
            street,
            mobile
        }

        alert(JSON.stringify(userObj));
        
        dispatcher(SaveUserToDBUsingAxios(userObj))

        evt.preventDefault();  //meaning that the default action that belongs to the event will not occur
    }

    return (
        <>
          
            <h1>User Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" 
                                value={uName} //state to update the userName
                            placeholder="User Name" onChange={onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" 
                                value={pass} 
                            placeholder="Password" onChange={(evt)=>setPassword(evt.target.value)} maxLength={20}/>
                    </div>
                    <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" 
                                value={street} 
                            placeholder="Street Name" onChange={(evt)=>setStreet(evt.target.value)} />
                    </div>
                        
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" 
                            value={mobile} placeholder="Mobile" maxLength={11}
                            onChange={(evt)=>setPhone(evt.target.value)} />
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginUser}/>
                </div>
            </section>
        </>
    )


}

export default UserHooksWithUseState;
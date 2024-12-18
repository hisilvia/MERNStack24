//hooks are the independent functions build perform the tasks we have to do with states, reducers etc
import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AddUserToStore, SaveUserToDBUsingFetch, SaveUserToDBUsingAxios } from "../../State/User/UserActions";


let UserHooksWithUseRef =(props) => {


    //to subscribe we need to implement - mapStateToProps and its equivalent hook is userSelector
    let user = useSelector((store)=>store.UserReducer.user)
    console.log(user);

    //userRef - works as a reference to html element and allows us to update the value 
    //          as well creates un-controlled
    let userName = useRef(null);   
    let password = useRef(null); 
    let street = useRef(null); 
    let mobile = useRef(null); 

    //componentDidMount - life cycle method allows us to access html and setdata
    //useEffect is used to implement three life cycle methods <shouldComponent, componentDidMount, componentWillMount)
    //useEffect checks for any data change or UI interaction and allows to call for re-render on the state change
    
    useEffect(()=>{

        userName.current.value = user.userName;
        password.current.value = user.password;
        street.current.value = user.street;
        mobile.current.value = user.mobile;

        //returning a call back works as destructure life cycle method
        return ()=>{

            //this function acts as component will unmount
            console.log("Component Unmounted")   //when we switch to another Nav eg.click 'AppCopy'
        }
    },[]) //when we set [] or any array this initializes the state values and userEfffect acts as componentDidMount


    //to make component a publisher we need to implement to props=usDispatch
    let dispatcher = useDispatch();

    let updateToStore = (evt) =>{

        //user.userName = userName.current.value; ==>//A state mutation was detected between dispatches, 
                             // in the path 'UserReducer.user.userName'. so replace it with the next line
         /*                     
        let user = { userName:userName.current.value };
        alert(JSON.stringify(user))
        dispatcher(AddUserToStore(user));
        */

        let userObj = {
            userName: userName.current.value,
            password:password.current.value,
            street: street.current.value,
            mobile: mobile.current.value
        }
        alert(JSON.stringify(userObj));
        //dispatcher(AddUserToStore(userObj))    //works well
        //dispatcher(SaveUserToDBUsingAxios(userObj))  //works well
        dispatcher(SaveUserToDBUsingFetch(userObj))
        
       
        evt.preventDefault()


    }
        
    return (
        <>
            <input type="text" placeholder="Please type userName" ref={userName} maxLength={20} />
            <input type="text" placeholder="Please type password" ref={password} maxLength={20} />
            <input type="text" placeholder="Please type street" ref={street} maxLength={20} />
            <input type="text" placeholder="Please type mobile" ref={mobile} maxLength={20} />

            <button onClick={updateToStore}>Submit</button>
        </>
    )

}

export default UserHooksWithUseRef;
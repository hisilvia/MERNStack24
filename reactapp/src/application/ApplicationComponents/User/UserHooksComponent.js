//hooks are the independent functions build perform the tasks we have to do with states, reducers etc
import React, {userState, useRef} from 'react'
import {useSelector} from "react-redux"

let UserHooksComponent =(props) => {

    //to subscribe we need to implement - mapStateToProps and its equivalent hook is userSelector
    let user= useSelector((store)=>store.userReducer.user)
    console.log(user);

    //userRef - works as a reference to html element and allows us to update the value 
    //          as well creates un-controlled
    let userName = userRef(null);

    //componentDidMount - life cycle method allows us to access html and setdata
    //useEffect is used to implement three life cycle methods <shouldComponent, componentDidMount, componentWillMount)
    //useEffect checks for any data change or UI interaction and allows to call for re-render on the state change
    useEffect(()=>{

        userName.current.value = user.userName;
    },[]) //when we set [] or any array this initializes the state values and userEfffect acts as componentDidMount


    //to make component a publisher we need to implement to props=usDispatch
    let dispatcher = userDispath();

    let updateToStore = (evt) =>{


        evt.preventDefault()
    }
    return (
        <>
            <input type="text" placeholder="Please type userName" ref={userName} maxLength={20} />
            <button></button>
        
        </>
    )

}

export default UserHooksComponent;
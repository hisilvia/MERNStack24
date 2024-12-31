//store - is a redux object which helps us handle state changes
//reducer - is a function which works with switch case (for each action type) and updates the state
// for every change returns new state
//each component will have its respective reducer 
//action - is the object a reducer accepts to create a new state
//action - object => action type (increment) ,payload (+5)

import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import UserReducer from "./User/UserReducer";
import ProductReducer from "./Product/ProductReducer";

//we can add multiple reducers and combine them togather to have one root reducer and add it to store
let rootReducer = combineReducers({  
    UserReducer, //userReducer : userReducer    
    ProductReducer
})

//create or configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
)

//Date: 2024-12-18
//Redux - the data management library for front-end application (not just react) -not react we also can do it
//Five steps:
//1.Reducers ==><callback functions - with switch case using action <type and payload>>
//2.Actions  ==>action object consists of <type and payload>
//3.ActionCreator  ==>can be understood as the event handler call from the front end
//4.Dispatch ==>creates a 
//5.Store
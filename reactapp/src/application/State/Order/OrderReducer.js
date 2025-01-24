import * as actionTypes from "../ActionTypes";

const initialState = [];

let OrderReducer = (state=initialState, action)=>{
    console.log("Order Reducer ", action.payload);

    switch(action.type){

        case(actionTypes.ADD_ORDER):
            return [...state, action.payload]

        case(actionTypes.UPDATE_ORDER):
            return action.payload

        case(actionTypes.FETCH_ORDER):
            return action.payload    

        case(actionTypes.CANCEL_ORDER):
            return initialState

        default:
            return state
    }
}
export default OrderReducer;
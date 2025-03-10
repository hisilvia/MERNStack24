import * as actionTypes from "../ActionTypes";

const initialState = [];

let OrderReducer = (state=initialState, action)=>{
    console.log("Order Reducer ", action.payload);

    switch(action.type){

        case actionTypes.ADD_ORDER:
            let newState = state
            return [newState, action.payload]
            //return [...newState, action.payload]

        case actionTypes.UPDATE_ORDER:
            return action.payload

        case actionTypes.FETCH_ORDER:
            return action.payload  

        case actionTypes.CANCEL_ORDER:
            return state.filter((item)=>item._id != action.payload.orderId)
       
        case actionTypes.MOVE_ORDER:
            return state.filter((item)=>item._id == action.payload.orderId)     
        
            default:
            return state
    }
}
export default OrderReducer;
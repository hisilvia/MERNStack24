import * as actionTypes from "../ActionTypes";

const Initial_State = ''

let CouponReducer = (state = Initial_State, action)=>{

    switch(action.type) {

        case actionTypes.ADD_COUPON:
            return action.payload;

        case actionTypes.EMPTY_COUPON:
            return Initial_State;

        default:
            return state
    }
}

export default CouponReducer;
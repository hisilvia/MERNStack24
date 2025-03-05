import * as actionTypes from '../ActionTypes'

export const AddCoupon = (value)=>{

    return{
        type :  actionTypes.ADD_COUPON,
        payload : value
    }
}

export const EmptyCoupon =()=>{
    return{
        type : actionTypes.EMPTY_COUPON
    }
}
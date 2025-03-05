import * as actionTypes from "../ActionTypes";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { EmptyTheCart, resetCartAfterCheckout } from "../Cart/CartAction";
import { EmptyCoupon } from "../Coupon/CouponAction"

//Actions
export const addItemToOrder = (order)=>{
    return {
        type: actionTypes.ADD_ORDER,
        payload: order,
    }
}

const updateItemInOrder = (order)=>{
    return {
        type: actionTypes.UPDATE_ORDER,
        payload: order
    }
}

const fetchItemFromOrder = (orders)=>{
    return {
        type: actionTypes.FETCH_ORDER,
        payload: orders
    }
}

const cancelItemFromOrder = ()=>{
    return {
        type: actionTypes.CANCEL_ORDER
    }
}

//Add orders to database
export const saveUserOrder = (userid, order, coupon) =>{
    console.log("saveUserOrder is called ");

    return function(dispatch) {    //getState() is available here

        
        //get cartList from state
        //const cart = getState().CartReducer
        //const cart = useSelector((state)=>state.CartReducer)

        const discount = coupon 
            ? {
                code: coupon,
                percentage: 10,
              }
            : undefined


        axios.post("http://localhost:9000/order/api/saveUserOrder",
            {userid, order, discount}
        )
        .then((allData)=>{
            let orderResp = allData.data;
            console.log("order save response: ", orderResp);

            //if(orderResp.order != null) {
                
            dispatch(addItemToOrder(orderResp));  //fetch the item in the cart
            // dispatch(EmptyTheCart());   
            // dispatch(resetCartAfterCheckout({},userid));
            // dispatch(EmptyCoupon());
           
           // }
           

        })
        .catch((err)=>{
            console.log("Error While Saving Order", err)
        })
    }
};

export const fetchUserOrder = (userid)=>{
    console.log("fetchUserOrder ");
    return function (dispatch) {
        axios.post("http://localhost:9000/order/api/getUserOrder", 
              {userid}
        )
        .then((allOrderData)=>{
            let orderList = allOrderData.data;
            console.log("get carts response ", orderList);
            dispatch(fetchItemFromOrder(orderList))

            // if (orderList != null) {
            //     for (const item of orderList){
            //         console.log("Order item in for of ", item);
            //         let action = dispatch(fetchItemFromOrder(item));
            //         dispatch(action);
            //     }
            // }
        })
        .catch((err) =>{
            console.log("Error while fetching order", err)
        })
    }
};

/*
export const cancelOrder = (orderId) => {
    console.log("cancelOrder")
    return function (dispatch) {
        axios.delete("http://localhost:9000/order/api/getUserOrder",
            {orderId}
        )
        .then((response) => {
            const data = response.data
            if
        })
    }
}
 */
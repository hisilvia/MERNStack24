import * as actionTypes from "../ActionTypes";
import axios from "axios";

//Actions
export const addItemToOrder = (order)=>{
    return {
        type: actionTypes.ADD_ORDER,
        payload: order,
    }
}

export const updateItemInOrder = (order)=>{
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

export const cancelItemFromOrder = (orderId)=>{
    return {
        type: actionTypes.CANCEL_ORDER,
        payload : {orderId}
    }
}
//Save order again after cancelling it
export const saveOrderAgain = (userid, orderlist)=>{
    console.log("Order List: ", orderlist);

    return function (dispatch){
        axios.patch("http://localhost:9000/order/api/saveUserOrder",
            {orderlist, userid}
        )
        .then((allData)=>{
            let orderResp = allData.data;
            console.log("order save again response ", orderResp);
            dispatch(updateItemInOrder(orderlist));
        })
        .catch((err)=>{
            console.log("Error while saving order again: ", err)
        })
    }
};

//Add orders to database
export const saveUserOrder = (userid, order, coupon) =>{
    console.log("saveUserOrder is called ");

    //Server call
    return function(dispatch) {   

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
            //dispatch(updateItemInOrder())
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

        })
        .catch((err) =>{
            console.log("Error while fetching order", err)
        })
    }
};

export const moveOrderToCart = (orderId)=>{
    return {
        type: actionTypes.MOVE_ORDER,
        payload: {orderId},
    }
}

export const reOrder = (orderId) => {
    console.log("reOrder is called")
    return function(dispatch) {
        axios.post("http://localhost:9000/order/api/reOrder", {orderId})
            .then((response => {

            })
            .catch((err) =>{
                console.log("Error while reOrdering...", err)
            }) 
        )
    }
}

export const cancelOrder = (orderId) => {
    console.log("cancelOrder")
    return function (dispatch) {
        axios.delete("http://localhost:9000/order/api/cancelUserOrder",
            {orderId}
        )
        .then((response) => {
            //const data = response.data
            dispatch(cancelItemFromOrder(orderId))
        })
        .catch((err) =>{
            console.log("Error while canceling order", err)
        })    
    }
}
 
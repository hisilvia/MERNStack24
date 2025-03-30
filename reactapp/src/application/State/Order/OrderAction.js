import * as actionTypes from "../ActionTypes";
import axios from "axios";
import { MergeTheCart } from "../Cart/CartAction";

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

export const fetchItemFromOrder = (orders)=>{
    return {
        type: actionTypes.FETCH_ORDER,
        payload: orders
    }
}

export const cancelItemFromOrder = (orderid)=>{
    return {
        type: actionTypes.CANCEL_ORDER,
        payload : {orderid}
    }
}


//Add orders to database
export const saveUserOrder = (userid, order, coupon) =>{
    console.log("saveUserOrder is called ");

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
};



export const cancelOrder = (orderid)=>{
    console.log("orderid: ", orderid)

    return function(dispatch, getState) {
        axios.delete(`http://localhost:9000/order/api/${orderid}/cancelOrder`)
        .then((response)=>{
            const data = response.data;
            console.log("response: ", response);
            console.log("data: ", data);

            //const orders = data.order;
            //Using Object.entries() to get key-value pairs
            //const orderArrayKeys = Object.keys(data);
            const orders = getState().OrderReducer;
            console.log("orders: ", orders);

            const updatedOrders = orders.map((item)=>{

                if(item._id == data._id){

                    console.log("item._id: ", item._id);
                    console.log("data._id: ", data._id);
                    console.log("data inside if: ", data);
                    return data
                }
                console.log("item: ", item);
                return item
            })
               
            dispatch(cancelItemFromOrder(orderid))
            //dispatch(updateItemInOrder(updatedOrders))

            //dispatch(updateItemInOrder(orderid))
            //dispatch(fetchItemFromOrder(data));

        }).catch((err) =>{
            console.log("Error while canceling order", err)
        })
    }
}

export const reOrder = (orderItems) => {
    console.log("reOrder is called");

    return function(dispatch, getState) {
        
        const cart = getState().CartReducer
        console.log("cart: ", cart);

        const newCart = cart.map((cartItem)=>JSON.parse(JSON.stringify(cartItem)));
        console.log("newCart: ", newCart); 

        orderItems.forEach((orderItem) => {

            newCart.push({...orderItem.order, qty:orderItem.qty})

            /*
            const productId = orderItem.order._id;
            const cartItem = newCart.find((cartItem)=>cartItem._id === productId)

            if(cartItem){
                cartItem.qty += orderItem.qty
            }else{
                newCart.push({...orderItem.order, qty:orderItem.qty})
            }
            */
        });
        console.log("cart after push: ", cart);
        dispatch(MergeTheCart(newCart));
        
    }
}

import * as actionTypes from "../ActionTypes";
import axios from "axios";
import {fetchProducts} from "../Product/ProductAction"

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

const fetchItemFromOrder = (order)=>{

    return {
        type: actionTypes.FETCH_ORDER,
        payload: order
    }
}

const cancelItemFromOrder = ()=>{

    return {
        type: actionTypes.CANCEL_ORDER
    }
}

//Push orders to database
export const saveUserOrder = (order, userid) =>{
    console.log("Order list: ", order);

    return function(dispatch) {

        axios.post("http://localhost:9000/order/api/saveUserOrder",
            {order, userid}
        )
        .then((allData)=>{
            let orderResp = allData.data;
            console.log("order save response: ", orderResp);
            dispatch(addItemToOrder(order));  //fetch the item in the cart
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
            // dispatch(FetchOrder(order))

            if (orderList != null) {
                for (const item of orderList){
                    console.log("Order item in for of ", item);
                    let action = dispatch(fetchItemFromOrder(item));
                    dispatch(action);
                }
            }
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
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItemComponent from '../Order/OrderItemComponent'
import { fetchUserOrder, saveOrderAgain, updateItemInOrder, saveUserOrder } from '../../State/Order/OrderAction'

let OrderComponent = (props)=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let cartList = useSelector((state)=>state.CartReducer)
    let orderList = useSelector((state)=>state.OrderReducer)
    let coupon = useSelector((state)=>state.CouponReducer)

    console.log("user in OrderComponent", user)
    console.log("orderList in OrderComponent", orderList)
   // console.log("orderList.oreder length: ", orderList.length);

    let dispatch = useDispatch();

    
    useEffect(()=>{
           dispatch(fetchUserOrder(user._id)); 
    },[]);
    
    //const orderListId = orderList && orderList._id ? orderList._id : "";

    let clickToSaveOrder = (userid, orderList)=>{
        //evt.preventDefault();
        if(userid) {
           // alert("order will be saved");
            dispatch(saveOrderAgain(userid,orderList));
            
        }
    }

    return (
        <>
            <div style={{ margin: '20px' }}>
               
            { orderList && orderList.length > 0
               ?  
               (  
                    <table  className="col-sm-12 col-md-12">
                        <thead>
                            <tr>
                                <th>Userid</th>
                                <th>Orderid</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Coupon Code</th>
                                <th>Discount</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Cancel</th>   
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.map((list)=>(
                                list ? <OrderItemComponent key={list._id} list={list} /> : null
                                
                            ))}
                        </tbody>
                    </table>
                                
                )
      
                :
                    <h4>No order yet!</h4>
                }

                {/* <button onClick={()=>dispatch(updateItemInOrder(orderList))}>Save Order</button> */}
                {/* <button onClick={clickToSaveOrder(user._id, orderList._id)}>Save Order</button>  */}
                
            </div>
        </>
    )
}
export default OrderComponent;


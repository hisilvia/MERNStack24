import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItemComponent from '../Order/OrderItemComponent'
import { fetchUserOrder, saveOrderAgain, updateItemInOrder, saveUserOrder } from '../../State/Order/OrderAction'


//Use this format in two part->orders and cancelled orders, 
// so need to pass props to divieinto two parts :
//  a. when props: canclledOrder = false ==> all orders in OrderComponent
//  b. when props: canclledOrder = true ==> this canclled order should be in CanclledComponent
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

    return (
        <>
            <div style={{ margin: '20px' }}>
               
            { orderList && orderList.length > 0
               ?  
               (  <div key={user._id}>
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
                           
                    </div>         
                )
      
                :
                    <h4>No order yet!</h4>
                }

                {/* <button onClick={()=>dispatch(updateItemInOrder(orderList))}>Save Order</button> */}
             
                
            </div>
        </>
    )
}
export default OrderComponent;


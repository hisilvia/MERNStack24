import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ViewItemComponent from './ViewItemComponent'

let CancelledOrders = ({canclledId})=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let orderList = useSelector((state)=>state.OrderReducer)
    
    console.log("user", user);
    console.log("orderList1", orderList)

    //let dispatch = useDispatch()
    const [cancelledOrders, setCancelledOrders]=useState();

    
    let reOrderList = orderList.order;
    console.log("reOrderList: ", reOrderList);

    


    return (
        
        <div className="col-md-12">
            <h2>Cancelled Orders</h2> 



            <button>ReOrder</button> 
           
        
        
        </div>
    )
}
export default CancelledOrders;
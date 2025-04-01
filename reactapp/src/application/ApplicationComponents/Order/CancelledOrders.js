import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ViewItemComponent from './ViewItemComponent'
import OrderItemComponent from '../Order/OrderItemComponent'

let CancelledOrders = (props)=>{
    /*
    const [cancelledTable, setCancelledTable] = useState([]);

    useEffect( ()=>{

        axios.get()
    })
    */
    console.log("props: ", props)
    let user = useSelector((state)=>state.UserReducer.user)
    let orderList = useSelector((state)=>state.OrderReducer)


    
    console.log("user", user);
    console.log("orderList1", orderList)

    //let dispatch = useDispatch()
    const [cancelledOrders, setCancelledOrders]=useState();

    
    let cancelledList = orderList.filter(item=>item.status === 'Cancelled');
    /*
    let cancelledList  = orderList.map((item)=>{
        return item.status === 'Cancelled'
        
    })
        */
    console.log("cancelledList: ", cancelledList);

    const handleReOrderButton = ({orderid, items}, evt) =>{
            evt.prev
    
                console.log("handleCancelButton")
                dispatchItem(cancelOrder(orderid))
                //dispatchItem(saveOrderAgain(orderid))
                //dispatchItem(cancelItemFromOrder)
            
        }


    return (
        
        <>
        <div style={{ margin: '20px' }}>
           
        { cancelledList && cancelledList.length > 0
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
                            <th>ReOrder</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {cancelledList.map((list)=>(
                            list ? <OrderItemComponent key={list._id} list={list} /> : null
                            
                        ))}
                    </tbody>
                </table>
                       
                </div>         
            )
  
            :
                ''
            }
        
        </div>
    </>
    )
}
export default CancelledOrders;
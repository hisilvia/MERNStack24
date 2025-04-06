import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';      //Employing external libraries-->ensure they are installed->npm install date-fns
import ViewItemComponent from "./ViewItemComponent"
import {cancelItemFromOrder, updateItemInOrder, moveOrderToCart, cancelOrder, reOrder} from "../../State/Order/OrderAction"
import { useNavigate } from 'react-router-dom'
import Review from "./Review";

let OrderItemComponent = (props)=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let coupon = useSelector((state)=>state.CouponReducer)
    
    let list = props.list;
    console.log("props: ", props);
    console.log("props.item: ", props.list);

    let listId = list._id;
    //let orderId = listId._id;
    //let [date, setDate] = useState(item.date);
    let dispatchItem = useDispatch();

    //const itemId = item && item._id ? item._id : "";

    //Calculate the total price
    // let item = list.order;
    // let totalPrice = item.reduce((acc, item) => acc+item.qty * item.price, 0 );

    const [isToView, setIsToView] = useState(false);
    const toggleToTable = ()=>{
        setIsToView(!isToView)
    }

    //Locate the order date
    const date1 = ()=>{
        const d = new Date(list.date).toISOString();

        //console.log("createDate: ", d);
        return d;
    }

    //Calculate current time
    const date2 = ()=>{
        const time = new Date();
        const localTime = time.toISOString();
        //console.log("currentTime: ", localTime);
        return localTime;
    }

    const navigate = useNavigate();
    //Assume the order will be delivered after created or paied it 48 hours
     // const stillAbleToCancelOrder = ()=>{
     //     return !isMoreThan48Hours(date1, date2)
     // }
 
     //If the order is not delivered, 
     // then the items will be saved in the cart while a customer is clicking the cancel button
    const handleCancelButton = (orderid)=>{
        if(!isMoreThan48Hours(date1, date2) && (list.status !== 'Cancelled')){

            console.log("handleCancelButton")
            dispatchItem(cancelOrder(orderid))
            navigate('/cancelledOrders');
            //dispatchItem(saveOrderAgain(orderid))
            //dispatchItem(cancelItemFromOrder)
        }
        
        if (list.status == 'Delivered'){
            alert('Items were delivered successfully. You cannot cancel the order!')
        }

        if (list.status == 'Cancelled'){
            dispatchItem(reOrder(list.order))
        }
    }

    
    return(
        <>       
            { list._id != null && !isMoreThan96Hours(date1, date2) &&(
            // { list._id != null && (     
             
                <tr key={list._id}>
                    
                    <td>{user._id}</td>
                    <td>{list._id}</td>
                    <td>{format(new Date(list.date).toISOString(), 'MM/dd/yyyy hh:mm:ss')}</td>
                    
                    <td>{list.amount}</td>

                    {list.discount ? (<td>{list.discount.code}</td>) : (<td>No Discount</td>)}
                    {list.discount ? (<td>{list.discount.percentage}%</td>) : (<td>No Discount</td>)}
                    
                    {/* <td>{list.order.total}</td> */}
                    <td>{list.totalAmount}</td>

                    {
                         isMoreThan48Hours(date1, date2) 
                             ? <td style={{ fontWeight: 'bold' }}>Delivered</td>
                             : <td style={{ fontWeight: 'bold' }}>{list.status}</td>
                     }
                     {/* <td style={{ fontWeight: 'bold' }}>{isDelivered()}</td>  */}

                    <td>
                        <button onClick = {toggleToTable}>View</button>
                    </td>
                    <td>
                        <button onClick={()=>handleCancelButton(list._id)}>
                            {list.status == 'Cancelled' ? 'ReOrder' : 'Cancel'}
                        </button>
                    </td>
                    {/* <td><button onClick={()=>dispatchItem(cancelItemFromOrder(list._id))}>Cancel</button></td> */}
                    {/* <td><button onClick={(evt)=>handleCancelButton(list, evt)}>Cancel</button></td> */}
                    
                    
                    {isToView && (
                       
                        <tr>
                            <td>
                            
                                <table className="table table-bordered border-primary  table-secondary table-hover">
                                {/* <table class="table"> */}
                                    <thead  className="thead-light">
                                        <tr>
                                            <td>Product Name</td>
                                            <td>Unit Price</td>
                                            <td>Desc</td>
                                            <td>Qty</td>
                                            <td>Total</td>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        
                                    {list.order.map( item=>(
                                        <ViewItemComponent key={list._id} item={item} />
                                    ))}
                                    
                                    </tbody>
                                </table>
                               
                                <Review />
                            </td>
                            
                        </tr>
          
                    )} 
                    
                    
                </tr>
             
            )}
            
           
        </>




        
    )
}
export default OrderItemComponent;

function isMoreThan48Hours(date1, date2) {
    const timeDifference = Math.abs(new Date(date2()).getTime() - new Date(date1()).getTime());
    //console.log("date1: ", date1());
    //console.log("date2: ", date2());
    const hoursDiffence = timeDifference / (1000 * 60 * 60);
    // console.log("hoursDifference: ", hoursDifference)     
    // debugger
    return hoursDiffence >48;
}

export function isMoreThan96Hours(date1, date2) {
    const timeDifference = Math.abs(new Date(date2()).getTime() - new Date(date1()).getTime());
    //console.log("date1: ", date1());
    //console.log("date2: ", date2());
    const hoursDifference = timeDifference / (1000 * 60 * 60);     
    //console.log("hoursDifference: ", hoursDifference)
    // debugger
    return hoursDifference > 96;
}
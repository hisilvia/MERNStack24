import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';      //Employing external libraries-->ensure they are installed->npm install date-fns
import moment from 'moment';
import ViewItemComponent from "./ViewItemComponent"
import {cancelItemFromOrder} from "../../State/Order/OrderAction"

let OrderItemComponent = (props)=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let coupon = useSelector((state)=>state.CouponReducer)
    
    let list = props.list;
    console.log("props: ", props);
    console.log("props.item: ", props.list);

    //let [date, setDate] = useState(item.date);
    let dispatchItem = useDispatch();

    //const itemId = item && item._id ? item._id : "";

    const [isToView, setIsToView] = useState(false);
    const toggleToTable = ()=>{
        setIsToView(!isToView)
    }

    const date1 = ()=>{
        const d = new Date(list.date).toISOString();

        console.log("createDate: ", d);
        return d;
    }

    const date2 = ()=>{
        const time = new Date();
        const localTime = time.toISOString();
        console.log("currentTime: ", localTime);
        return localTime;
    }

    return(
        <>       
            { list._id != null && !isMoreThan48Hours(date1, date2) && (
                 
                <tr key={list._id}>

                    <td>{user._id}</td>
                    <td>{list._id}</td>
                    <td>{format(new Date(list.date).toISOString(), 'MM/dd/yyyy hh:mm:ss')}</td>
                    
                    {list.discount ? (<td>{list.discount.code}</td>) : (<td>No Discount</td>)}
                    {list.discount ? (<td>{list.discount.percentage}%</td>) : (<td>No Discount</td>)}
                    
                    <td>{list.order.total}</td>
                    <td>
                        <button onClick = {toggleToTable}>View</button>
                    </td>
                    <td><button onClick={()=>dispatchItem(cancelItemFromOrder(list._id))}>Cancel</button></td>

                    {isToView && (
                        <tr>
                            <td colSpan="8">
                                <table class="table table-bordered border-primary  table-secondary table-hover">
                                {/* <table class="table"> */}
                                    <thead  class="thead-light">
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
    console.log("date1: ", date1());
    console.log("date2: ", date2());
    const hoursDiffence = timeDifference / (1000 * 60 * 60);     
    // debugger
    return hoursDiffence > 35;
}

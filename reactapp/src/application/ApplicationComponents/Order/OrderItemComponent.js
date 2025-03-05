import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';      //Employing external libraries-->ensure they are installed->npm install date-fns
import ViewItemComponent from "./ViewItemComponent"

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

    return(
        <>       
            { list._id != null && (
                 
                <tr key={list._id}>
                    <td>{user._id}</td>
                    <td>{list._id}</td>
                    <td>{format(new Date(list.date), 'MM/dd/yyyy hh:mm a')}</td>
                    {/* <td>{list.discount.code}</td>
                    <td>{list.discount.percentage}%</td> */}
                    {/* <td>{orderList.order.total}</td> */}
                    <td>
                        <button onClick = {toggleToTable}>View</button>
                    </td>
                    <td><button >Cancel</button></td>

                    {isToView && (
                        <tr>
                            <td colSpan="6">
                                <table class="table table-bordered border-primary ">
                                    <thead>
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

                                        // <tr key={item._id}>

                                        //     <td>{item.name}</td>
                                        //     <td>{item.price}</td>
                                        //     <td>{item.desc}</td>
                                        //     <td>{item.qty}</td>
                                        //     <td>{item.price * item.qty}</td>
                                        // </tr>
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
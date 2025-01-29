import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";


let OrderItemComponent = (props)=>{

    let item = props.item;
    //let [date, setDate] = useState(item.date);
    let dispatchItem = useDispatch();
    return(
        <tr>
            <td>{item._id}</td>
            <td>{item._id}</td>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.price*item.qty}</td>
           
                {/* {
                    props.readOnly ?  "" : //bydefault false as boolean default is false
                        <Fragment>
                            <td><button onClick={()=>dispatchItem(RemoveItemFromOrder(item?.id))}>Cancel</button> </td>
                        </Fragment>
                } */}
        </tr>
    )
}
export default OrderItemComponent;
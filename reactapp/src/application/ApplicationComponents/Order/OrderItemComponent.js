import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";


let OrderItemComponent = (props)=>{

    let item = props.item;
    let [Quantity, setQuantity] = useState(item.qty)
    let dispatchItem = useDispatch();
    return(
        <tr>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>
                
            </td>
            <td>
                
            </td> 
                {
                    props.readOnly ?  "" : //bydefault false as boolean default is false
                        <Fragment>
                            <td><button onClick={()=>dispatchItem(RemoveItemFromCart(item?.id))}>Remove</button> </td>
                            <td><button onClick={()=>dispatchItem(UpdateItemInCart(item?.id, Quantity))}>Edit</button></td>
                        </Fragment>
                }
        </tr>
    )
}
export default OrderItemComponent;
import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

let ViewItemComponent = (props)=>{

    let item = props.item;
    console.log("props: ", props);
    console.log("props.item: ", props.item);

    //let [date, setDate] = useState(item.date);
    let dispatchItem = useDispatch();

    //const itemId = item && item._id ? item._id : "";

    return(
        <>   
            <tr key={item._id}>
                
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
            </tr>
                           
        </>     
    )
}
export default ViewItemComponent;
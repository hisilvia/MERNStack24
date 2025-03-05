import React from "react";

const CartSummary = ({ data: { count, amount }, readOnly, coupon })=>{
    // let {
    //     count,
    //     amount, 
    // } = props.data;

    // let coupon='';

    return(
        <div>
            {/* {props.readOnly ? <h5> Cart Summary </h5> : <h2> Cart Summary </h2>} */}
            {readOnly ? <h5> Cart Summary </h5> : <h2> Cart Summary </h2>}
            <p> Products Count: {count} </p>
            <p> Amount: ${amount} </p>
            {coupon && <p> Discount: 10% , Code: {coupon}</p>}
            <p> Total amount: ${coupon ? <span style={{ fontWeight: 'bold' }}>{parseFloat((amount * 0.9).toFixed(2))}</span> 
                                       : <span style={{ fontWeight: 'bold' }}>{amount}</span>} 
            </p>
           
        </div>
    )
}
export default CartSummary;
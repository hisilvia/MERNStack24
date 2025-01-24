import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { AddCoupon } from "../../State/Coupon/CouponAction";

const CouponComponent = (props)=>{

    let coupon = useSelector((state)=>state.CouponReducer)

    let dispatchCoupon = useDispatch();

    const generateCoupon = () => {
        const value = Math.floor(Math.random()*900000+100000)
        dispatchCoupon(AddCoupon(value))
    }

    return (
        <>
            <div>
                <p>Coupon: {coupon ? coupon : 'Please generate a coupon'}  
                    <button onClick={generateCoupon}>GenerateCoupon</button>
                </p>
               
            </div>
            
        </>
    )
}

export default CouponComponent;
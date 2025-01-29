import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import CartSummary from "../Cart/CartSummary";
import { calculateSummaryData } from "../Cart/CartComponent";
import CartItemComponent from "../Cart/CartItemComponent";
import CouponComponent from "../Coupon/CouponComponent";
import {addItemToOrder} from "../../State/Order/OrderAction"

let CheckoutComponent = (props) =>{

    let user = useSelector((state)=>state.UserReducer.user)
    let cartList = useSelector((state)=>state.CartReducer)
    let dispatch = useDispatch()

    console.log("user", user);
    console.log("carList1", cartList)

    const [showEvents, setShowEvents] = useState(true);
    
    
    let AddItemInCheckoutToOrder = ()=>{
        //let val = evt.target.value
        setShowEvents(false);
       // alter("successfully1");
        //dispatch(addItemToOrder(cartList))
    }

    return (
        
        <div className="col-md-12">
            {showEvents && 
                <div>
                    <h1> Payment Page </h1>
                    <h4>Hey <span style={{ fontWeight: 'bold' }}>{user.userName}</span>,</h4>
                    <h4>Your products will be delivered to below address: </h4>
                    <h4>Delivered to:  <span style={{ fontWeight: 'bold' }}>{user.street}</span></h4>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : //bydefault false as boolean default is false
                                        <>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map((item)=>{
                                        return <CartItemComponent item={item} key={item._id} />
                                })
                            }
                        </tbody>

                    </table>
                    <hr/> 

                    <CartSummary  data={calculateSummaryData(cartList)} readOnly={props.readOnly}/>
                    <CouponComponent />
                    <hr/>

                    <button onClick={ AddItemInCheckoutToOrder}>MakePayment</button>
                </div>
            }
            {!showEvents && 
                <div>
                    <p>Thankyou for the payment, your items under process!</p>
                </div>  
            }
            
        </div>
        
    )

} 
export default CheckoutComponent;
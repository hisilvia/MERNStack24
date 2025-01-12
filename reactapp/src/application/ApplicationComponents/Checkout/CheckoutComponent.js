import React, {useState} from "react";
import { useSelector } from "react-redux";
import CartSummary from "../Cart/CartSummary";
import { calculateSummaryData } from "../Cart/CartComponent";
import CartItemComponent from "../Cart/CartItemComponent";

let CheckoutComponent = (props) =>{

    let user = useSelector((state)=>state.UserReducer.user)
    let cartList = useSelector((state)=>state.CartReducer)

    console.log("user", user);
    console.log("carList", cartList)

    const [showEvents, setShowEvents] = useState(true);

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
                    <hr/>

                    <button onClick={() => setShowEvents(false)}>MakePayment</button>
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
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import { saveCartForCheckout } from "../../State/Cart/CartAction";
import CartSummary from "./CartSummary"
import { useNavigate } from 'react-router-dom'

let CartComponent = (props)=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let cartList = useSelector((state)=>state.CartReducer)

    let dispatchTheData = useDispatch();
    
    console.log("user", user)
    console.log("cartList", cartList)

    let clickToSaveCart = (cartList, userid)=>{
        if(userid) {
            alert("cart will be saved");
            dispatchTheData(saveCartForCheckout(cartList,userid));
           // navigate('/order');
        }else {
            alert("You're not logged-in!! Please login to help you in furture with your selected products!!")
            //add a function using navigation hook to re-direct to login page
        }
    }

    const navigate = useNavigate();

    let handleGoToCheckoutClick = () =>{
        navigate('/checkout');
    }

    return(

        <div className="col-md-12">
            <h2>Cart Component</h2>
            { cartList && cartList.length > 0 && cartList[0] != null? 
              <div>
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
                              props.readOnly ?  "" : //by default false as boolean default is false
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
                   <CartSummary data={calculateSummaryData(cartList)} readOnly={props.readOnly} />
                   {
                        props.readOnly ? <></> : 
                            <>
                                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                            Save Cart
                                    </button>
                                <button onClick={handleGoToCheckoutClick} >
                                    Go To Checkout
                                </button> 
                            </> 
                    }
                </div> 
            :
            <h4>Please go to product and add item to cart!!!</h4>
            }
        </div>

    )
}
export default CartComponent;

export function calculateSummaryData(cartItems) {
    let amount = 0;
    let count = 0;

    for(let item of cartItems) {
        amount += parseInt(item.qty) * parseInt(item.price);
        count +=  parseInt(item.qty);
    }

    return {
        amount,    //ES6 syntactic sugar amount: amount
        count      //if key and values are same name, then we can put it this way without ":"
    }
}
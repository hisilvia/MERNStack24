import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItemComponent from '../Cart/CartItemComponent'


let OrderComponent = (props)=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let orderList = useSelector((state)=>state.OrderReducer)

    console.log("user in OrderComponent", user)
    console.log("orderList", orderList)

    let dispatch = useDispatch();

    let clickToSaveOrder



    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Userid</th>
                        <th>Orderid</th>
                        <th>Date</th>
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        {
                              props.readOnly ?  "" : //by default false as boolean default is false
                                  <>
                                      <th>Cancel</th>                            
                                  </>
                        }

                    </tr>

                </thead>
                <tbody>
                    

                </tbody>
            </table>
            <p>Order Review:</p>
             
        </>
    )
}
export default OrderComponent;
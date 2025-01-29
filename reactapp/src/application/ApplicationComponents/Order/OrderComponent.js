import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItemComponent from '../Order/OrderItemComponent'
import { saveUserOrder } from '../../State/Order/OrderAction'


let OrderComponent = (props)=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let orderList = useSelector((state)=>state.OrderReducer)

    console.log("user in OrderComponent", user)
    console.log("orderList", orderList)

    let dispatch = useDispatch();

    let clickToSaveOrder = (orderList, userid) => {
        if (userid) {
            alter("order will be saved");
            dispatch(saveUserOrder(orderList, userid));
        }
    }



    return (
        <>
            
            { orderList && orderList.length > 0 ?
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
                                      <th>Action</th>                            
                                  </>
                        }

                    </tr>

                </thead>
                <tbody>
                    {
                        orderList.map((item)=>{
                            //return item.qty;
                             return <OrderItemComponent item={item} key={item._id} />
                        })
                    }

                </tbody>
            </table>
            :
            <h4>Please go to checkout!</h4>
                }
            {/* {
                orderList && orderList.length > 0 ?
                    orderList.map((item)=>{
                        return item.name
                    })
                :
                 <h4>Please go to checkout!</h4>
            } */}




            <p>Order Review:</p>
             {user._id}
             {orderList._id}
        </>
    )
}
export default OrderComponent;
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ViewItemComponent from './ViewItemComponent'

let ReOrderComponent = ()=>{

    let user = useSelector((state)=>state.UserReducer.user)
    let orderList = useSelector((state)=>state.OrderReducer)
    
    console.log("user", user);
    console.log("orderList1", orderList)

    //let dispatch = useDispatch()

    let reOrderList = orderList.order;
    console.log("reOrderList: ", reOrderList);

    


    return (
        
        <div className="col-md-12">
            <h2>ReOrder Component</h2>  
            { reOrderList && reOrderList.length > 0
               ? ( 
                  <table className="col-sm-12 col-md-12">
                                    
                        <thead>
                            <tr>
                                <td>Product Name</td>
                                <td>Unit Price</td>
                                <td>Desc</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            {reOrderList.map( item=>(
                                <ViewItemComponent key={reOrderList._id} item={item} />
                            ))}
                        
                        </tbody>
                    </table>

                    )
                : 'No reorder list'
            }
        
        
        </div>
    )
}
export default ReOrderComponent;
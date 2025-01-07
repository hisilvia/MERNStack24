import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { AddItemToCart } from "../../State/Cart/CartAction"

let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

    let dispatchToAddProduct = useDispatch();

    let addItemToCart = (product)=>{
        dispatchToAddProduct(AddItemToCart(product))
    }

    return(
        <ul className="product col-md-12">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           Name: {product.name}
                {showHide ? 
                            <ul>
                                <li>Price: {product.price}</li>
                                <li>Des: {product.desc}</li>
                                <li>Rating: {product.rating}</li> 
                                <button onClick={()=>addItemToCart(product)}>Add Item</button>
                            </ul>
                         : <div></div>
                } 
            </li>
        </ul>
    )

}

export default ProductItemComponent;
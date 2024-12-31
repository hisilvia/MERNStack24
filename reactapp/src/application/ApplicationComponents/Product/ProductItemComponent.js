import React, { useState } from "react";
import { useDispatch} from "react-redux";

let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

    //let dispatchToAddProduct = useDispatch();

    return(
        <ul className="product col-md-11">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           Name: {product.name}
                {showHide ? 
                            <ul>
                                <li>Price: {product.price}</li>
                                <li>Des: {product.desc}</li>
                                <li>Rating: {product.rating}</li> 
                            </ul>
                         : <div></div>
                } 
            </li>
        </ul>
    )

}

export default ProductItemComponent;
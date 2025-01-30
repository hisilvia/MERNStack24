import React from "react";
import { useDispatch } from "react-redux";


let DisplayItem = ({student}) => {

    let [showHide, toggleShowHide] = useState(false)
    let dispatch = useDispatch();

    return(
        <ul className="product col-md-12">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           Student: {student.name}
                {showHide ? 
                            <ul>
                                <li>Major: {student.major}</li>
                                <li>Hobby: {student.hobby}</li>
                                
                                {/* <button onClick={()=>addItemToCart(product)}>Add Item</button> */}
                            </ul>
                         : <div></div>
                } 
            </li>
        </ul>
    )
}
export default DisplayItem;
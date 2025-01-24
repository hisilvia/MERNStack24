import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../State/Product/ProductAction";
import DisplayProduct from "./DisplayProduct";
import { useNavigate } from 'react-router-dom';

let ProductComponent = (props) => {

    let name = useRef(null)
    let price = useRef(null)
    let desc = useRef(null)
    let rating = useRef(null)


    let product = useSelector((state)=>state.ProductReducer.Product) //product reducer
    let user = useSelector((state)=>state.UserReducer.user)
    console.log("userName = ", user.userName)

    let dispatchProduct = useDispatch();

    useEffect(()=>{
        //initializing the values we read from reducer to our product state
        name.current.value = product.name
        price.current.value = product.price
        desc.current.value = product.desc
        rating.current.value = product.rating
    }, [])

    let saveProductClick = (evt)=>{
        //creating product data model to be saved in db using product api
        let productToSave = {
            name : name.current.value,
            price : price.current.value,
            desc : desc.current.value,
            rating : rating.current.value
        }

        if (user.userName == "Admin") {
            alert("We are going to save this product!!! "+ JSON.stringify(productToSave))

            dispatchProduct(saveProduct(productToSave))
        }else {
            alert("You are not able to insert a new product.")
        }
        
        evt.preventDefault();
    }

    // const navigate = useNavigate();

    // let handleAddClick =()=> {
    //     navigate('/cart');
    // }

    return(
        <>
            <div>
                <h1 className="col-md-12">Product Component</h1>
            </div>
            
            <div>
                <form className={"form componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Product Name</b>
                            <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25} 
                            placeholder="Product Name" />
                        </div>
                        <div className="col-md-12">
                            <b>Price </b>
                            <input type="number" className="form-control col-md-6" ref={price} 
                            placeholder="Product Price" />
                        </div>
                        
                        <div className="col-md-12">
                            <b>Description </b>
                        <input type="text" className="form-control col-md-6" ref={desc} 
                            placeholder="Please Describe the product"  />
                        </div>
                        
                        <div className="col-md-12">
                            <b>Ratings </b>
                        <input type="text" className="form-control col-md-6" ref={rating} 
                            placeholder="Ratings" />
                        </div>

                        <input type="submit" className={"form-control btn btn-primary col-md-3 saveUser"} 
                            value={"Save"} 
                            onClick={saveProductClick}/>

                        {/* <input type="submit" className={"btn btn-primary col-md-3 saveUser"} 
                                    value={"Add"} onClick={handleAddClick}/> */}
                    </div>
                </form>       
                <hr/>
                <DisplayProduct />
                
            </div>
              
        </>
    )

}

export default ProductComponent;
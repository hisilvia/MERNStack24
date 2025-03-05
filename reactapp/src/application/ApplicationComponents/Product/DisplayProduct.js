
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsFromServer } from "../../State/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";


let DisplayProduct = ()=>{

    let products = useSelector((state)=>state.ProductReducer.Products)
    let product = useSelector((state)=>state.ProductReducer.Product) 

    let dispatch = useDispatch();

    console.log("products: ", products)
    //const [ addNewProduct, setAddNewProduct] = useState({})

    //component did mount
    useEffect(()=>{
        //products && products.length == 0  ? dispatchToFetchProduct(fetchProductsFromServer()) : []
        dispatch(fetchProductsFromServer());
        console.log("products: ", products)
    },[product])

    console.log("products.length: ",products?.length);
    return(
        <>
            {
                products && products.length > 0
                ?
                products.map((product)=>{
                    console.log("product: ", product);
                    return <ProductItemComponent product={product} key={product._id} />
                })
                : <h4>No Products To Display</h4>
            }

        </>
    )
}

export default DisplayProduct;

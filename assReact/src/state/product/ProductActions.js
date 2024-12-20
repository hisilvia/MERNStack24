import * as actionTypes from "../ActionTypes";
import axios from "axios";

//action accepts payload value/object to be used in product reducer swich
export const AddProductToStore = (product)=>{
    return {
        type: actionTypes.ADD_PRODUCT_TO_STORE,
        payload: product
    }
}

//need to make a ajax - asynchronous javascript like xml - be used to make parallel server/api calls
//React.fetch() - we can use to make API or can add axios library to achieve the same
export const SaveProductToDBUsingFetch = (productObj)=>{
    console.log("SaveProductToDBUsingFetch called")

    return (dispatch)=>{
        window.fetch("http://localhost:8000/product/api/register",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productObj)
            })
            .then((response)=>response.json())
            .then((productData)=>{
                console.log(productData)
                dispatch(AddProductToStore(productData))
            })
            .catch((error)=>console.log(error))
     }   
}

export const SaveProductToDBUsingAxios = (productObj)=>{
    console.log("SaveProductToDBUsingAxios called")
    return (dispatch)=>{
        axios.post("http://localhost:8000/product/api/register",//uri or end point of singninup api
            productObj // the student state object we dispatch from the student component
        ).then((collection)=>{
            let loggedProduct = collection.data
            console.log(loggedProduct)
            dispatch(AddProductToStore(loggedProduct))
        })
        .catch((error)=>console.log(error))
    }
}
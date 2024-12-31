import * as actionTypes from "../ActionTypes";
import axios from "axios";

//product calls
//Product Action and Server Call
export const saveProduct = (product)=>{
    console.log("Product1 ", product);

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/product/api/saveProduct",
            product
        )
        .then((allData)=>{
            let productresp = allData.data;
            console.log("product save response1 ", productresp);
            console.log("\n");
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product in saveProduct1", err)
            console.log("\n");
        })
    }
};

export const fetchProducts = ()=>{
    console.log("Product2 ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.get("http://localhost:9000/product/api/getproducts")
        .then((allProducts)=>{
            let productresp = allProducts.data;
            console.log("get products response1 ", productresp);
            //dispatch(loading(false));
            dispatch(addProduct(productresp))
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product in fetchProducts", err)
        })
    }
}

export const addProduct = (products)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TO_STORE,
        payload : {products}
    }
}

export const setLoading = (loading)=>{
    return {
        type : "SET_LOADING",
        payload : {loading}
    }
}

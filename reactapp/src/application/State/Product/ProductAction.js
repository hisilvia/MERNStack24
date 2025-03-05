import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const addProduct = (product)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TO_STORE,
        payload : product
    }
}

export const fetchProducts = (products)=>{
    return {
        type : actionTypes.FETCH_PRODUCTS,
        payload : products        //should not have curly braces
    }
}

//Fetch products from server
export const fetchProductsFromServer = ()=>{
    console.log("fetchProductsFromServer is called. ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.get("http://localhost:9000/product/api/getproducts")
        .then((allProducts)=>{
            let productresp = allProducts.data;
            console.log("get products response1 ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts(productresp))
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product in fetchProducts", err)
        })
    }
}

//Save product to server
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
            dispatch(addProduct(product));

            console.log('Product added successfully', product)
            alert('Product added successfully')
        })
        .catch((err)=>{
            console.log("Error While Saving Product in saveProduct1", err)
            console.log("\n");
        })
    }
};

//Fetch a product by ID
export const fetchProductById = async(productId, callback) => {
    try {
        const response = await axiosInstance.post('http://localhost:9000/product/api/getProductById', { id: productId })
        const product = response.data
        callback(product)
      } catch (err) {
        console.log('There was an error:', err)
        alert('There was an error:', err)
      }
}

/*
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



export const addProduct = (product)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TO_STORE,
        payload : {product}
    }
}

export const setLoading = (loading)=>{
    return {
        type : "SET_LOADING",
        payload : {loading}
    }
}
*/
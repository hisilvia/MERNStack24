import * as actionTypes from "../ActionTypes";

let initialState = {
    product: {
        productName: "",
        price: '',
        desc: "",
        rating: ''
    }
}

let ProductReducer = (state=initialState, action)=>{
    console.log("Product Reducer ", action.payload);

    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_STORE:
            return {...state, product: action.payload}

        default:
            return state;
            
    }
}
export default ProductReducer;
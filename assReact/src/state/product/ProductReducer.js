import * as actionTypes from "../ActionTypes";

let initialState = {
    product: {
        productName: "bagel",
        price: 9.99,
        desc: "bread",
        rating: 4
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
//this contains list of actions which will be used in reducers and action files
//constants are returned as action types which will be used in action and reducer files

//User
export const ADD_USER_TO_STORE = "STORE.ADDUSER";
export const ADD_PRODUCTS_TO_STORE = "STORE.ADDPRODUCT";
export const SIGN_OUT_USER = "STORE.SIGNOUTUSER";

//Cart
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//Coupon
export const ADD_COUPON = "STORE.ADDCOUPON";
export const EMPTY_COUPON = "STORE.EMPTYCOUPON";

//Order
export const ADD_ORDER = "STORE.ADDORDER";
export const CANCEL_ORDER = "STORE.CANCELORDER";
export const UPDATE_ORDER = "STORE.UPDATEORDER";
export const FETCH_ORDER = "STORE.FETCHORDER";
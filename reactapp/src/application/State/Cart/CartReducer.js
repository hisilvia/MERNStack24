import * as actionTypes from "../ActionTypes";

const Initial_State = []

//write callback/ reducer to generate new state upon action change
let CartReducer = (state = Initial_State, action)=>{
    console.log("Cart Reducer ", action.payload);
    
    //switch case logic to read action type and return new state / updated state
    switch (action.type) {
        
        case actionTypes.ADD_ITEM :        
            let newState = state.filter(item => {
                if(item && item._id) {
                    return item._id != action.payload.selectedProduct._id;
                }    
            });
            return [...newState , action.payload.selectedProduct];   
            
        case actionTypes.UPDATE_ITEM :
            return state.map((item)=>{
                if (item._id != '' && item._id == action.payload.productId) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item;//for all other items in cart do not update anything
            })
            
        case actionTypes.REMOVE_ITEM :
            return state.filter((item)=>item._id != action.payload.productId)
        
        case actionTypes.EMPTY_CART :
            return []
      
        default:
            return state
    }
}

export default CartReducer;
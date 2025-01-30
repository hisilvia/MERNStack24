import * as actionTypes from "../ActionTypes";

let initialState = {
    student : {
        studentName : "default",
        major : "CS",
   
    },
    // students: [],
    // Loading: false
}

//this will be used by store to map the action type and then update/create new user state
let StudentReducer = (state=initialState, action)=>{
    console.log("Student Reducer ", action.payload);
    
    switch (action.type) {
        case actionTypes.ADD_STUDENT_TO_STORE:
            return {...state, student : action.payload}    
    
        // case "SET_LOADING" :
        //     return { ...state, Loading : action.payload.loading }

        default:
            return state;           
    }
}
export default StudentReducer;
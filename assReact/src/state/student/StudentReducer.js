import * as actionTypes from "../ActionTypes";

let initialState = {
    student : {
        studentName : "",
        major : "CS",
        hobbies: []
   
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

        case actionTypes.ADD_HOBBY_TO_STUDENT:
            return {
                ...state, 
                student: {
                    ...state.student,
                    hobbies: [...state.student.hobbies, action.payload],
                    }
                }

        case actionTypes.FETCH_STUDENT_HOBBIES:
            return {
                ...state,
                student: {
                    ...state.student,
                    hobbies: action.payload,
                }
            }
            
        default:
            return state;           
    }
}
export default StudentReducer;
import { USER_INFO,UPDATE_PATIENTS_DATA } from "./actionTypes"

const initialState = {
  userInfo: null,
  isLoggedin: true,
  isVerifying: true,
  allPatientsData : [
    {
      name : "naman Aggarwal",
      age : 24,
      email : "nmn.office@yahoo.com",
      gender : "male",
    },
    {
      name : "kushal dave",
      age : 26,
      email : "kushal.office@yahoo.com",
      gender : "male",
    },
    {
      name : "john horo",
      age : 23,
      email : "john.office@yahoo.com",
      gender : "male",
    },
    {
      name : "chandresh bhaiya",
      age : 25,
      email : "chand.office@yahoo.com",
      gender : "male",
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_INFO: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case UPDATE_PATIENTS_DATA: {
      return {
        ...state,
        allPatientsData: action.payload
      }
    }
    // case LOGOUT: {
    //   localStorage.clear();
    //   return {
    //     ...initialState
    //   }
    // }
    // case UPDATE_LIKES : {
    //   return {
    //     ...state,
    //     feeds : action.payload,
    //   }
    // }
    default: {
      return {...state};
    }
  }
}

export default reducer;
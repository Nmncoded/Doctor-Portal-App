import { USER_INFO,UPDATE_PATIENTS_DATA, UPDATE_LOGIN_STATUS } from "./actionTypes"

const initialState = {
  userInfo: null,
  isLoggedin: false,
  allPatientsData : null,
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
    case UPDATE_LOGIN_STATUS : {
      return {
        ...state,
        isLoggedin : action.payload,
      }
    }
    // case LOGOUT: {
    //   localStorage.clear();
    //   return {
    //     ...initialState
    //   }
    // }
    default: {
      return {...state};
    }
  }
}

export default reducer;
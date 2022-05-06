import { USER_INFO,UPDATE_PATIENTS_DATA, UPDATE_LOGIN_STATUS } from "./actionTypes"

export const updateUserInfo = (data) => {
  return {
    type: USER_INFO,
    payload: data
  }
}

export const updatePatientsData = (data) => {
  return {
    type: UPDATE_PATIENTS_DATA,
    payload: data
  }
}

export const updateLoginStatus = (data) => {
  return {
    type: UPDATE_LOGIN_STATUS,
    payload: data
  }
}
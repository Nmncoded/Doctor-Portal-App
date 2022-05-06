import { USER_INFO,UPDATE_PATIENTS_DATA } from "./actionTypes"

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
import axios from "axios"
import { ADD_FAILURE, ADD_REQUEST, ADD_SUCCESS, GET_ALLPRODUCT_DATA_FAILURE, GET_ALLPRODUCT_DATA_REQUEST, GET_ALLPRODUCT_DATA_SUCCESS } from "./actionTypes"

export const getAllProductsDataRequest = () => ({
    type: GET_ALLPRODUCT_DATA_REQUEST
})

export const getAllProductsDataSuccess = (data) => ({
    type: GET_ALLPRODUCT_DATA_SUCCESS,
    payload: data
})

export const getAllProductsDataFailure = () => ({
    type: GET_ALLPRODUCT_DATA_FAILURE
})

export const getAllProducts = (payload) => (dispatch) => {

    dispatch(getAllProductsDataRequest())
    axios.get("https://urbancompany.herokuapp.com/api/Service_page_data")
        .then((res) => { dispatch(getAllProductsDataSuccess(res.data)) })
        .catch((err) => { dispatch(getAllProductsDataFailure()) })
}




export const addRequest = () => ({
    type: ADD_REQUEST
})

export const addSuccess = (data) => ({
    type: ADD_SUCCESS,
    payload: data
})

export const addFailure = () => ({
    type: ADD_FAILURE
})

export const addProducts = (payload) => (dispatch) => {

    dispatch(addRequest())
    axios.post("https://urbancompany.herokuapp.com/api/cart",payload)
        .then((res) => { dispatch(addSuccess(res.data)) })
        .catch((err) => { dispatch(addFailure()) })
}
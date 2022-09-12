import { actionTypes } from "../constants/actionTypes";

export const setSelectedProduct = (response) => {
    return {
        type: actionTypes.SET_SELECTED_PRODUCT,
        payload: response
    }
}
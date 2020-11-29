import userTypes from "./userTypes";

const initialState = {
    userDetails: []
}

export const userReducer = (state = initialState, action) => {


    switch (action.type) {
        case userTypes.UPDATE_INFO:
            return {
                userDetails: action.payload
            }

        default:
            return state;
    }

}
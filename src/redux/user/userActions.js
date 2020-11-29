import userTypes from "./userTypes"

export const updateInfo = (info) => {

    return {
        type: userTypes.UPDATE_INFO,
        payload: info
    }
}
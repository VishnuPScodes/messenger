


export const messageAcrions={
    ADD_MESSAGE_REQUEST:"ADD_MESSAGE_REQUEST",
    ADD_MESSAGE_SUCCESS:"ADD_MESSAGE_SUCCESS",
    ADD_MESSAGE_FAILURE:"ADD_MESSAGE_FAILURE"
}


export const addMessageRequest=(()=>{
    return {
        type:messageAcrions.ADD_MESSAGE_REQUEST
    }
})

export const addMessageSuccess=((data)=>{
    return {
        type:messageAcrions.ADD_MESSAGE_SUCCESS,
        payload:data
    }
})

export const addMessageFailure=(()=>{
    return {
        type:messageAcrions.ADD_MESSAGE_FAILURE
    }
})
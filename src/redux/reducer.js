import { messageAcrions } from "./action"



const initState={
    error:false,
    loading:false,
    data:[]
}

export const messageReducer=((state=initState,action)=>{
    switch(action.type){
        case messageAcrions.ADD_MESSAGE_FAILURE :{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        case messageAcrions.ADD_MESSAGE_REQUEST :{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case messageAcrions.ADD_MESSAGE_SUCCESS :{
            return {
                ...state,
                loading:false,
                error:false,
                data:[...state.data,payload]
            }
        }
        default :
        return state
    }

})
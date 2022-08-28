import { legacy_createStore } from "redux";
import { messageReducer } from "./reducer";




export const store=legacy_createStore(messageReducer);

console.log(store.getState());


store.subscribe(()=>{
    console.log(store.getState());
})


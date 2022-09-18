import { messagesSch } from "../models/messages.js"





export const getMessages=async ()=>{
    try{
        const messagesIs=await messagesSch.find();
        res.status(200).json(messagesIs);
    }catch(err){
        res.status(404).json({message:Error.message})
    }
}


export const deleteMessage=async ()=>{
    try{
        
        const messageIs=await messageIs.find();
        messageIs=messageIs.filter((a)=>a.id!=)
    }
}
import { messagesSch } from "../models/messages"





export const getMessages=async ()=>{
    try{
        const messagesIs=await messagesSch.find();
        res.status(200).json(messagesIs);
    }catch(err){
        res.status(404).json({message:Error.message})
    }
}
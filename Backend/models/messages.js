import mongoose from "mongoose"


export const messagesSchema={
    id:Number,
    message:[String]
}


export const messagesSch=mongoose.model('messages',messagesSchema);

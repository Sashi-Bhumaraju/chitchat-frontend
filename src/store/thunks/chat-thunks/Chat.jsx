import { addDoc, and, collection, or, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { LocalStorageGet } from "../../../util/LocalStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Message from "../../../models/Message";
import { GetTimeStamp } from "../../../util/GetTimeStamp";
import Contact from "../../../models/Contact";


const GetChatListOfUserQuery = (frndId) => {
    const user = LocalStorageGet("chitchat.user");
    const messagesCollectionRef = collection(db,"messages"); 
    return  query( messagesCollectionRef, orderBy("timestamp"), and( where('sender_id','in',[user.user_id,frndId]), where('recipient_id','in',[user.user_id,frndId]) ) );  
}

const SendMessageToUser = createAsyncThunk("send/message",async (rawMessageObject) => {
   const messagesCollectionRef =  collection(db,"messages");
   const user = LocalStorageGet("chitchat.user");
   const newMessage = new Message();
   newMessage.content = rawMessageObject.content;
   newMessage.recipient_id = rawMessageObject.friend_id;
   newMessage.sender_id = user.user_id;
   newMessage.is_read = false;
   newMessage.timestamp = GetTimeStamp();
   const JsonMessageObject = JSON.parse(JSON.stringify(newMessage));
   await addDoc(messagesCollectionRef,JsonMessageObject);
   
   const newContact = new Contact();
   
})

export { GetChatListOfUserQuery, SendMessageToUser }
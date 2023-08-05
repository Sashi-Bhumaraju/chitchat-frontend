import { Timestamp, addDoc, and, collection, doc, or, orderBy, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { LocalStorageGet } from "../../../util/LocalStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Message from "../../../models/Message";
import { GetTimeStamp } from "../../../util/GetTimeStamp";
import Contact from "../../../models/Contact";
import { GetFirebaseTimestamp } from "../../../util/GetFirebaseTimestamp";


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
   newMessage.timestamp =  GetTimeStamp()
   const JsonMessageObject = JSON.parse(JSON.stringify(newMessage)); 
   await addDoc(messagesCollectionRef,JsonMessageObject); 

   const newContact = new Contact(); 
   newContact.recent_content =  rawMessageObject.content; 
   newContact.timestamp =  GetTimeStamp(); 
   newContact.user_id_1 = user.user_id; 
   newContact.username_1 = user.username; 
   newContact.photo_url_1 = user.photo_url; 
   newContact.user_id_2 = rawMessageObject.friend_id;
   newContact.username_2 = rawMessageObject.friend_username; 
   newContact.photo_url_2 = rawMessageObject.friend_photo_url; 

   const JsonContactObject = JSON.parse(JSON.stringify(newContact)); 
   const contactDocId = doc(db,"contacts",rawMessageObject.contact_id); 
   await setDoc(contactDocId,JsonContactObject) 
   
})

export { GetChatListOfUserQuery, SendMessageToUser }
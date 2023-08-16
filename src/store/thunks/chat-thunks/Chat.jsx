import { Timestamp, addDoc, and, collection, doc, getDocs, onSnapshot, or, orderBy, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { LocalStorageGet } from "../../../util/LocalStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Message from "../../../models/Message";
import { GetTimeStamp } from "../../../util/GetTimeStamp";
import Contact from "../../../models/Contact";
import { GetFirebaseTimestamp } from "../../../util/GetFirebaseTimestamp";
import { useDispatch } from "react-redux";
import { GetAllChatList } from "../../slices/ChatSlice";


const GetChatListOfUserQuery = (frndId) => {
    const user = LocalStorageGet("chitchat.user");
    const messagesCollectionRef = collection(db,"messages"); 
    return  query( messagesCollectionRef, orderBy("timestamp"), and( where('sender_id','in',[user.user_id,frndId]), where('recipient_id','in',[user.user_id,frndId]) ) );  
}


var unsubscribe = () => {};   
const GetChatList = createAsyncThunk("user/getAllMessages", async (obj) => {  
//   console.log(obj)
    try {      
        console.log("1")
        const queryStatement = GetChatListOfUserQuery(obj.chatId);      
        // const snapshot = await getDocs(queryStatement);
        // return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("2")
        unsubscribe();      
        unsubscribe = onSnapshot(queryStatement, (snapshot) => {            
            var chatList = snapshot.docs.map((doc) => {    
                return  { id: doc.id, ...doc.data() }         
            }); 
            console.log("inside onsnapshot",chatList)  
            obj.dispatch(GetAllChatList(chatList));
        })        
    } catch (error) {   
        throw error;        
    }   

})    


const SendMessageToUser = createAsyncThunk("send/message",async (rawMessageObject) => { 

    const user = LocalStorageGet("chitchat.user");  

    const messagesCollectionRef =  collection(db,"messages"); 
    const message = {
            content : rawMessageObject.content, 
            recipient_id : rawMessageObject.friend_id,
            sender_id : user.user_id, 
            is_read : false, 
            timestamp : serverTimestamp()
    }
    await addDoc(messagesCollectionRef,message); 


    const newContact1 = {
            timestamp : serverTimestamp(), 
            recent_content : rawMessageObject.content,
            user_id_1 : user.user_id, 
            username_1 : user.username, 
            photo_url_1 : user.photo_url, 
            user_id_2 : rawMessageObject.friend_id,   
            username_2 : rawMessageObject.friend_username, 
            photo_url_2 : rawMessageObject.friend_photo_url,
            recent_content_user_id : user.user_id

    }

    if( rawMessageObject.contact_id ) {  
        const contactDocId =  doc(db,"contacts",rawMessageObject.contact_id); 
        await setDoc(contactDocId,newContact1)  }
    else {
        const contactDocId = collection(db,"contacts"); 
        await addDoc(contactDocId,newContact1)}
})

export { GetChatListOfUserQuery, SendMessageToUser, GetChatList }
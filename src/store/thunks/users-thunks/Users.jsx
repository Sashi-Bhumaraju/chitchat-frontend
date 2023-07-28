import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs, onSnapshot, or, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { LocalStorageGet } from "../../../util/LocalStorage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAllContacts } from "../../slices/UsersSlice";
import { useDispatch } from "react-redux";


const GetContactsListOfUserQuery = () => {
    const user = LocalStorageGet("chitchat.user");
    const ContactsCollectionRef = collection(db,"contacts"); 
    return  query( ContactsCollectionRef, or( where('user_1','==',user.user_id), where('user_2','==',user.user_id) ) );  
}


const GetUser = createAsyncThunk("user/get", async (user_id) => { 
    const docRef = doc(db,"users",user_id); 
    const docSnap =  await getDoc(docRef); 
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}) 

const GetAllUsers = createAsyncThunk("user/getAll", async () => { 
    const collectionRef = collection(db,"users"); 
    const q = query( collectionRef, limit(100)); 
    const usersSnapShot = await getDocs(q); 
    const allUsers = []; 
    usersSnapShot.forEach((doc) => { allUsers.push(doc.data()) }); 
}) 

const GetAllContacts = createAsyncThunk("user/getAllContacts", async () => { 

    const user = LocalStorageGet("chitchat.user");
    const collectionRef = collection(db,"contacts"); 
    const q = query( collectionRef, or( where('user_1','==',user.user_id), where('user_2','==',user.user_id) ) ); 
   
   const unsubscribe = onSnapshot(q, (snapshot) => {
    const allUsers = [];
      snapshot.forEach((doc) => { allUsers.push(doc.data()) });
  });

  // Clean up the listener when the component unmounts or the thunk is canceled.
  return () => unsubscribe();
   
    // const usersSnapShot = await getDocs(q); 
    // const allUsers = []; 
    // usersSnapShot.forEach((doc) => { allUsers.push(doc.data()) }); 
    // return allUsers 
})

const DeleteUser = createAsyncThunk("user/delete",async (user_id)=>{
    return await deleteDoc(doc(db, "users", user_id));
})

export { GetUser, GetAllUsers, DeleteUser, GetAllContacts, GetContactsListOfUserQuery };


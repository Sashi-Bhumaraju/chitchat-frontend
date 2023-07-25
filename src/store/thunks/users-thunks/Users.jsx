import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const collectionRef = collection(db,"users");

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
    const usersSnapShot = await getDocs(collectionRef);
    const allUsers = [];
    usersSnapShot.forEach((doc) => { allUsers.push(doc.data()) }); 
}) 

const DeleteUser = createAsyncThunk("user/delete",async (user_id)=>{
    return await deleteDoc(doc(db, "users", user_id));
})

export { GetUser, GetAllUsers, DeleteUser };

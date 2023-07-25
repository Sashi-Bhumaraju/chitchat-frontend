import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db, provider } from "../../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore"; 


const SignIn = createAsyncThunk("user/signin", async () => { 
       return await signInWithPopup(auth, provider) 
}); 

const SignOut = createAsyncThunk("user/signout",async ()=>{ 
       return await signOut(auth);
}); 


const SetUserData = async (user) => { 
       const u = JSON.stringify(user);
       console.log(u);
       await setDoc(doc(db, "users",user.user_id),JSON.parse(u));
}

export { SignIn,SignOut, SetUserData };
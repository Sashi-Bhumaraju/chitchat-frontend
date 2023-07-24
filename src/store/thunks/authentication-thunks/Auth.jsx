import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

const SignIn = createAsyncThunk("user/signin", async () => { 
       return await signInWithPopup(auth, provider) 
}); 

const SignOut = createAsyncThunk("user/signout",async ()=>{ 
       return await signOut(auth);
}); 

export { SignIn,SignOut };
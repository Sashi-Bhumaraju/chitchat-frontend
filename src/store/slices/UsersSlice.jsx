import { createSlice } from "@reduxjs/toolkit";
import { SetUserData, SignIn, SignOut } from "../thunks/authentication-thunks/Auth";
import User from "../../models/User";
import { LocalStorageGet, LocalStorageRemove, LocalStorageSet } from "../../util/LocalStorage";
import  { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp } from "firebase/firestore";
import { GetTimeStamp } from "../../util/GetTimeStamp";


const UsersSlice = createSlice({  
    name: "user",  
    initialState : {   
        data: LocalStorageGet("chitchat.user") ,   
        isLoading: false,   
        error: null,    
    },   
    reducers : {},  
    extraReducers (builder) {  
        
        builder.addCase(SignIn.fulfilled, (state,action) => {  
            const rawUserData = action.payload.user;  
            const user = new  User(rawUserData.uid, rawUserData.displayName, rawUserData.email, rawUserData.photoURL, GetTimeStamp() );
            LocalStorageSet("chitchat.user",user); 
            state.data = user; 
            SetUserData(user);
        });  

        builder.addCase(SignOut.fulfilled, (state,action) => {  
            state.data = null;
            LocalStorageRemove("chitchat.user"); 
        }); 

    }
});

export const UsersReducer = UsersSlice.reducer;

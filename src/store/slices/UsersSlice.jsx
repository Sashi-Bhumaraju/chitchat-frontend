import { createSlice } from "@reduxjs/toolkit";
import { SetUserData, SignIn, SignOut } from "../thunks/authentication-thunks/Auth";
import User from "../../models/User";
import { LocalStorageGet, LocalStorageRemove, LocalStorageSet } from "../../util/LocalStorage";
import  { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp } from "firebase/firestore";
import { GetTimeStamp } from "../../util/GetTimeStamp";
import { GetAllContacts, GetAllSearchedUsers, GetUser } from "../thunks/users-thunks/Users";


const UsersSlice = createSlice({   
    name: "user",  
    initialState : {   
        data: LocalStorageGet("chitchat.user"),   
        fetchedUsers : [],  
        contactedUsers : [],
        searchedUsers: []
    },   
    reducers : {
        getAllContacts: (state, action) => {        
            const contactedUsersList = action.payload;             
            console.log(contactedUsersList)             
            state.contactedUsers=contactedUsersList;            
        }     
    },    
    extraReducers (builder) {  

        builder.addCase(SignIn.fulfilled, (state,action) => {  
            const rawUserData = action.payload.user;  
            const user = new  User(rawUserData.uid, rawUserData.displayName, rawUserData.email, rawUserData.photoURL, GetTimeStamp() );
            LocalStorageSet("chitchat.user",user); 
            state.data = user; 
            SetUserData(user); 
            state.fetchedUsers.push(user); 
        });  

        builder.addCase(GetUser.fulfilled, (state,action) => {  
            const user = action.payload;  
            state.fetchedUsers.push(user);
        });  

        builder.addCase(GetAllContacts.fulfilled, (state,action) => {      
            const contactedUsersList = action.payload;         
            console.log(contactedUsersList)        
            state.contactedUsers=contactedUsersList;        
        }); 
        
        builder.addCase(GetAllSearchedUsers.fulfilled, (state,action) => {      
            const searchedUsersList = action.payload;         
            console.log(searchedUsersList)        
            state.searchedUsers=searchedUsersList;        
        }); 

        builder.addCase(SignOut.fulfilled, (state,action) => {  
            state.data = null;
            LocalStorageRemove("chitchat.user"); 
        }); 

    }
});

export const UsersReducer = UsersSlice.reducer;
export const { getAllContacts } = UsersSlice.actions;
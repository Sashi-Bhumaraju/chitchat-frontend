import { createSlice } from "@reduxjs/toolkit";
// import { GetUser } from "../thunks/authentication-thunks/Auth";
import { auth } from "../firebase-config";
import User from "../../model/User";
import { LocalStorageGet, LocalStorageSet } from "../../util/LocalStorage";


const UsersSlice = createSlice({ 
    name: "user", 
    initialState : { 
        data: LocalStorageGet("chitchat.user") , 
        isLoading: false,  
        error: null,  
    }, 
    reducers : {},
    extraReducers(builder) { 
        builder.addCase(GetUser.pending, (state,action) => { 
            state.isLoading = true; 
            state.error = null; 
        }); 
        builder.addCase(GetUser.fulfilled, (state,action) => { 
            state.isLoading = false; 
            const data = action.payload; 
            // const user = new  User(data.name,data.email,data.bio,data.gender,data.phone,data.dob,data.invitedTournaments,data.myTournaments,data.conductedTournaments,data.profilePic,data.verified);
           LocalStorageSet("chitchat.user",data); 
            state.data = data; 
        }); 
        builder.addCase(GetUser.rejected, (state,action) => { 
            state.isLoading = false; 
            state.error = action.error; 
        });
    }
});

export const UsersReducer = UsersSlice.reducer;

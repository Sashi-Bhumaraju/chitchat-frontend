import { createSlice } from "@reduxjs/toolkit";
import { GetChatList } from "../thunks/chat-thunks/Chat";


const ChatSlice = createSlice({

    name:"chat",
    initialState: {
        data: [],
    },

    reducers: {
        GetAllChatList: (state, action) => {    
            console.log("inside  reducer",action.payload)
            const chatList = action.payload;              
            state.data = chatList      
        }   
    },  

    extraReducers (builder) {   
        builder.addCase(GetChatList.fulfilled, (state,action) => {    
            const chatList = action.payload;      
            state.data = chatList    
        });   
    }   
})  

export const ChatReducer = ChatSlice.reducer;
export const { GetAllChatList } = ChatSlice.actions
     
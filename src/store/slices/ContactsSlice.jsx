import { createSlice } from "@reduxjs/toolkit";


const ContactSlice = createSlice({
    name:"contact",
    initialState: {
        data: [],
    },
    reducers: {
        getAllContactsOfuser: (state, action) => {
            const contactedUsersList = action.payload;
            state.data=contactedUsersList; 
        }
    }
})

export const ContactReducer = ContactSlice.reducer;      
export const { getAllContactsOfuser } = ContactSlice.actions;      
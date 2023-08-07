import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/UsersSlice";
import { ContactReducer } from "./slices/ContactsSlice";
import { ChatReducer } from "./slices/ChatSlice";

const customMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer : {
        user  : UsersReducer,
        contact : ContactReducer,
        chat : ChatReducer
    },
    middleware: (getDefaultMiddleware) => customMiddleWare,
})

export * from "./thunks/authentication-thunks/Auth";    
export * from "./thunks/users-thunks/Users";    
export * from './slices/ContactsSlice'; 
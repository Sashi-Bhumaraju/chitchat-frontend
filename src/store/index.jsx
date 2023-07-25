import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/UsersSlice";

const customMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer : {
        user  : UsersReducer,
    },
    middleware: (getDefaultMiddleware) => customMiddleWare,
})

export * from "./thunks/authentication-thunks/Auth";
export * from "./thunks/users-thunks/Users"
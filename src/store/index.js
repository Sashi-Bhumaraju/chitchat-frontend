import { configureStore } from "@reduxjs/toolkit";

const customMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer : {
        user  : UsersReducer,
        tournaments : TournamentsReducer,
        games : GamesReducer
    },
    middleware: (getDefaultMiddleware) => customMiddleWare,
})
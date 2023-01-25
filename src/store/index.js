import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { injectStore } from "../api/axios-config";
import authSlice from "./slices/authSlice";

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    middleware: customizedMiddleware,
});

injectStore(store);

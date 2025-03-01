import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
  reducers: {},
  initialState: [

  ],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})
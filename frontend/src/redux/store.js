import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme.js'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})
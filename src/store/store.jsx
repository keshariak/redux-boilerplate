import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './Reducers/counterSlice'

export const store= configureStore({
    reducer:{
        counterReducer: counterSlice
    },
})
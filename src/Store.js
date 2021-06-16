import {configureStore} from '@reduxjs/toolkit';
import mailReducer from './features/mailSlice';
import userReducer from './features/userSlice';
 
const store =configureStore({
    reducer:{
        mail:mailReducer,
        user:userReducer,
    }
})
export default store;
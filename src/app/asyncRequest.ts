import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./userSlice";
import axios from "axios";

interface UserData {
    username: string
    password: string
}

export const registerUser = createAsyncThunk(
    'user/registerNewUser',
    async (userData, thunkAPI) => {
    
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData: UserData, thunkAPI) => {
        try {
            // const response = await axios.post('api/login', { userData });
            const tempToken = userData.username
            thunkAPI.dispatch(login(tempToken));
        } catch (error) {
            console.error(error)
        }
    }
)
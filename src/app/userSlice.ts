import { createSlice } from "@reduxjs/toolkit";

interface IState {
    token: string
}

const initialState: IState = {
    token: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {

        },
        
        login: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { register, login } = userSlice.actions;
export default userSlice.reducer;
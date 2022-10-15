import { createSlice } from '@reduxjs/toolkit';

interface IState {
  list: {}[]
}

const initialState: IState = {
  list: []
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    list: (state, action) => {
      const stateCopy = [...state.list];
      stateCopy.push(action.payload);
      state.list = stateCopy;
    }
  },
});

export const { list } = dateSlice.actions;
export default dateSlice.reducer;

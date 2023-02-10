import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roll_number: "",
  date:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addRoll:(state,action)=>{
        state.roll_number = action.payload
    },
    addDate: (state,action) => {
      state.date = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addRoll, addDate, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
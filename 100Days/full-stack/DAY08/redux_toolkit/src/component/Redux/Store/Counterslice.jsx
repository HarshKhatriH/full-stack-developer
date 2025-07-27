import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 5   
}

export const Counterslice = createSlice({

  name:"counter",
  initialState,
  reducers : {    

      increment: (state) => {
        state.value += 1
      },

      decrement: (state) => {
        state.value -= 1
      },

      resetcount : (state) => {
        state.value = 0;
      },

      actionpayload: (state,action) => {
        state.value += Number(action.payload)
      }


  }
})

export const {increment,decrement,resetcount,actionpayload} = Counterslice.actions;
export default Counterslice.reducer;
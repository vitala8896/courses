import { createSlice } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: [],
    inputs: {
      first: 1, 
      second: 1,
    },
    select : {
      first : "UK",
      second : "UK",
    }
  },
  reducers: { 
    setReduxCurrency: (state, event) => {
      state.currency = event.payload 
    },
    firstReduxInput: (state, event) => {
      state.inputs.first = event.payload 
    },
    secondReduxInput: (state, event) => {
      state.inputs.second = event.payload 
    },
    firstReduxSelect: (state, event) => {
      state.select.first = event.payload 
    },
    secondReduxSelect: (state, event) => {
      state.select.second = event.payload 
    },
  },
})

export const { 
  setReduxCurrency, firstReduxInput, secondReduxInput, firstReduxSelect, secondReduxSelect 
} = currencySlice.actions

export default currencySlice.reducer
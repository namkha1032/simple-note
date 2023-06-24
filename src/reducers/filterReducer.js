// import library
import { createSlice } from '@reduxjs/toolkit'
// reducer
const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}
// actions
export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter,
    }
}
// ------------------------------ Toolkit ------------------------------------
const filterSlice = createSlice({
    name: "filter",
    initialState: "ALL",
    reducers: {
        filterChange(state, action){
            return action.payload
        },
    }
})
// ------------------------------ Toolkit ------------------------------------
export default filterSlice
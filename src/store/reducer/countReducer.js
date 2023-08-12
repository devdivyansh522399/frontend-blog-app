import { createSlice } from "@reduxjs/toolkit";

let countIntialState = {number  : 0};

const countSlice = createSlice({
    name : "count",
    initialState : countIntialState,
    reducers :  {
        countChange(state,action){
            state.number = action.payload;
        }
    }
})

const  countActions = countSlice.actions;
const countReducers = countSlice.reducer; 

export {countActions, countReducers} ;
import { createSlice } from "@reduxjs/toolkit";


export const ListSlice = createSlice(
    {
        name:"list",
        initialState:[],
        reducers:{
            add: (state, action) => {
                state.push(action.payload);
            } ,
            remove: (state, action) => {
                return state.filter( (item) => item !== action.payload );
            }
        }
    }
)

export const {add, remove} = ListSlice.actions;

export default ListSlice.reducer;
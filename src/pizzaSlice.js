import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toppings: ['pepperoni'],
    gluten: true
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        toggleGluten: (state) => {
            state.gluten = !state.gluten
        },    
        addTopping: (state, action) => {
            state.toppings = [...state.toppings, action.payload]
        },
        clearTopping: (state, action) => {
            console.log('clear : ', state.toppings = [])
        },
    },
})

export const { toggleGluten, addTopping, clearTopping } = pizzaSlice.actions

export default pizzaSlice.reducer

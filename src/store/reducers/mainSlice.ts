
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
    value: number
    incrementAmount: number
}

const initialState: State = {
    value: 0,
    incrementAmount : 1
}

export const mainSlice = createSlice({ // TEST TEMPLATE
    name: 'main',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.incrementAmount
        },
        decrement: (state) => {
            state.value -= state.incrementAmount
        },
        changeIncrementAmount: (state, action: PayloadAction<number>) => {
            state.incrementAmount = action.payload
        },
    },
})

export const { increment, decrement, changeIncrementAmount } = mainSlice.actions

export default mainSlice.reducer
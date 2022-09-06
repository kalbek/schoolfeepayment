import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {currentState : 0}

const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        updateState(state, action) {
            state.currentState = action.payload
        },
        prepare(currentState){
            return {
                payload: {
                    currentState
                }
            }
        }
    }
})

export const selectAllSteps = (state) => state.steps;
export const { updateState } = stepsSlice.actions
export default stepsSlice.reducer
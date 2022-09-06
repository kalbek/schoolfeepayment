import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import schoolService from './schoolService'
const initialState = {
    schools: [],
    addSchoolsInitiated: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//Create new School
export const createSchool = createAsyncThunk('schools/create', async (schoolData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creati   on
        return await schoolService.createSchool(schoolData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Schools
export const getSchools = createAsyncThunk('schools/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creation
        return await schoolService.getSchools(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Delete user School
export const deleteSchool = createAsyncThunk('schools/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creation
        return await schoolService.deleteSchool(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {
        reset: (state) => initialState,
        initAddSchools(state, action){
            state.addSchoolsInitiated = action.payload
        },
        prepare(addSchoolsInitiated){
            return {
                payload: {
                    addSchoolsInitiated
                }
            }
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(createSchool.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createSchool.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.schools.push(action.payload)
        })
        .addCase(createSchool.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })

        // to get schools
        .addCase(getSchools.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getSchools.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.schools = action.payload
        })
        .addCase(getSchools.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })

        // to delete schools
        .addCase(deleteSchool.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteSchool.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.schools = state.schools.filter((school) => school._id !== action.payload.id)
        })
        .addCase(deleteSchool.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const selectAllSchoolSteps = (state) => state.school;
export const {reset, initAddSchools} = schoolSlice.actions
export default schoolSlice.reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import studentService from './studentService'
const initialState = {
    students: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create new School
export const createStudent = createAsyncThunk('students/register', async (studentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creation
        return await studentService.createStudent(studentData, token)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Schools
export const getStudents = createAsyncThunk('students/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creation
        return await studentService.getStudents(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Delete user School
export const deleteStudent = createAsyncThunk('students/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creation
        return await studentService.deleteStudent(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        reset: (state) => initialState
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(createStudent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createStudent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students.push(action.payload)
        })
        .addCase(createStudent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })

        // to get students
        .addCase(getStudents.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getStudents.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students = action.payload
        })
        .addCase(getStudents.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message= action.payload
        })

        // to delete students
        .addCase(deleteStudent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students = state.students.filter((student) => student._id !== action.payload.id)
        })
        .addCase(deleteStudent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const {reset} = studentSlice.actions
export default studentSlice.reducer
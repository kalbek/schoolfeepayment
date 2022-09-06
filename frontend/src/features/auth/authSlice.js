import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStrage
const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    users: [],
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk(
    'auth/register', 
    async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// login user
export const login = createAsyncThunk(
    'auth/login', 
    async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get users
export const getUsers = createAsyncThunk('users/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth school creation
        return await authService.getUsers(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    } ,
    extraReducers: (builder) => {
        builder
        // to register
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        // to get users
        .addCase(getUsers.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.users = action.payload
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })

        // to login
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        // to logout
        .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
    },
})

export const {reset} = authSlice.actions
export default authSlice.reducer
// form making the htttp request
// and sending data back and
// setting any data to local storage 

// axios for making HTTP request
import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
// login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// get list of registered users
const getUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.get(API_URL, config)

    return response.data
}

// get list of registered users
const getUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.get(API_URL, config)

    return response.data
}
// Logout user (you can use a server and set up http cookie)
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
    getUsers,
    getUser,
}

export default authService
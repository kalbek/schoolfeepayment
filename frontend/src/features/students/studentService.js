// form making the htttp request
// and sending data back and
// setting any data to local storage 

// axios for making HTTP request
import axios from 'axios'

const API_URL = '/api/students/'

// Create Student
const createStudent = async ( studentData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.post(API_URL, studentData, config)
    return response.data
}

// Get Users Student
const getStudents = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.get(API_URL, config)
    return response.data
}

// Delete Users Student
const deleteStudent = async (studentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.delete(API_URL + studentId, config)

    return response.data
}

const StudentService = {
    createStudent,
    getStudents,
    deleteStudent,
}

export default StudentService
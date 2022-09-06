// form making the htttp request
// and sending data back and
// setting any data to local storage 

// axios for making HTTP request
import axios from 'axios'
const API_URL = '/api/schools/'

// Create School
const createSchool = async (schoolData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.post(API_URL, schoolData, config)

    return response.data
}

// Get Users School
const getSchools = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.get(API_URL, config)

    return response.data
}
// Delete Users School
const deleteSchool = async (schoolId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }    
    const response = await axios.delete(API_URL + schoolId, config)

    return response.data
}
const schoolService = {
    createSchool,
    getSchools,
    deleteSchool,
}

export default schoolService

const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { 
    getStudents,
    setStudents,
    updateStudents,
    deleteStudents,
    getStudent,

} = require('../controllers/studentController')

router.route('/').get(protect, getStudents).post(protect, setStudents)
// router.route('/register/:id').post(protect, setStudents)
router.route('/:id').put(protect, updateStudents).delete(protect, deleteStudents)
router.route('/find/:id').get(protect, getStudent)

module.exports = router
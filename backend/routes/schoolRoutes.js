const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { 
    getSchools,
    setSchools,
    updateSchools,
    deleteSchools,
    getSchool,

} = require('../controllers/schoolController')

router.route('/').get(protect, getSchools).post(protect, setSchools)
router.route('/:id').put(protect, updateSchools).delete(protect, deleteSchools)
router.route('/find/:id').get(protect, getSchool)

module.exports = router
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {   
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        schoolId: {
            type: String,
            required: true,
        },
        fname: {
            type: String,
            // required: [true, 'Add student last name'],
        },
        lname: {
            type: String,
            // required: [true, 'Add student first name'],
        },
        grade: {
            type: String,
            // required: [true, 'Add student first name'],
        },
        section: {
            type: String,
            // required: [true, 'Add student first name'],
        },
    },
    {
      timestamps: true,
    }
)


module.exports = mongoose.model('Student', studentSchema)
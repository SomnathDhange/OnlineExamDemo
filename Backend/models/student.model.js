const Joi = require('joi');
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    mobileno: {
        type: String,
        required: true,
        max: 10,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 1024
    },
    email: {
        type: String,
        required: true,
        min: 4,
        max: 50
    }
});

function studentValidation(params) {
    const studentJoi = Joi.object().keys({
        name: Joi.string().min(3).max(30).required(),
        mobileno: Joi.string().min(10).max(10).required(),
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(4).max(50).required(),
        email: Joi.string().required()
    });

    return studentJoi.validate(params);
}


function studentLoginValidation(params) {
    const studentJoi = Joi.object().keys({ 
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(4).max(50).required()
    });

    return studentJoi.validate(params);
}


exports.validation = studentValidation;
exports.validationLogin = studentLoginValidation;
exports.StudentModel = mongoose.model('Student', studentSchema);
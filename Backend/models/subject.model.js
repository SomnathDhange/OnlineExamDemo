const mongoose = require('mongoose');
const Joi = require('joi');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30
    }
});

function subjectValidation(body) {
    const subjectJoi = Joi.object().keys({
        name: Joi.string().min(3).max(15).required()
    });
    const result = subjectJoi.validate(body);
    
    return result;
}

exports.validate = subjectValidation;
exports.Subject = mongoose.model('Subject', subjectSchema);

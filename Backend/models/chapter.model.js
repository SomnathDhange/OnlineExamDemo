const mongoose = require('mongoose');
const Joi = require('joi');
const subjectSchema = require('../models/subject.model');
const { func } = require('joi');

const ChapterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    subject: {
        type: subjectSchema,
        required: true,
    }
});

function chapterValidate(body, isUpdate = false) {
    let chapterSchema;
    if (isUpdate) {
        chapterSchema = Joi.object().keys({
            name: Joi.string().min(3).max(50).required(),
            subjectId: Joi.string()
        });
    } else {
        chapterSchema = Joi.object().keys({
            name: Joi.string().min(3).max(50).required(),
            subjectId: Joi.string().required()
        });
    } 
    return chapterSchema.validate(body)
}
  
exports.validate = chapterValidate;  
exports.Chapter = mongoose.model('Chapter', ChapterSchema);

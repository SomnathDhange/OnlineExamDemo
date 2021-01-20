const mongooose = require('mongoose');
const chapterSchema = require('../models/chapter.model');
const subjectSchema = require('../models/subject.model')
const Schema = mongooose.Schema;
const topicSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
    chapterId: { type: chapterSchema, required: true },
    subjectId: { type: subjectSchema, required: true }
});


exports.Topic = mongooose.model('Topic', topicSchema);
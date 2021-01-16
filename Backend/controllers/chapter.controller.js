const { Chapter, validate, validateUpdate } = require('../models/chapter.model');
const { Subject } = require('../models/subject.model');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAll = async (req, res) => {
    const chapters = await Chapter.find();
    res.status(200).send(chapters);
}

exports.getById = async (req, res) => {

    /** Validate Chapter id */
    const isValidId = ObjectId.isValid(req.params.id);
    if (!isValidId)
        return res.status(404).send('Please enter valid chapter id...!!!');

    const chapter = await Chapter.findById(req.params.id);

    return res.status(200).send(chapter);
}

exports.create = async (req, res) => {
    const errorResult = validate(req.body, true);

    /** Check User input with JOI  */
    if (errorResult.error)
        return res.status(400).send(errorResult.error.message)

    /** Validate Subject id */
    const isValidParam = ObjectId.isValid(req.body.subjectId);
    if (!isValidParam)
        return res.status(404).send('Please enter valid subject id...!!!');

    const subject = await Subject.findById(req.body.subjectId);
    if (!subject)
        return res.status(200).send('Invalid Subject Id');

    const chapterSave = new Chapter({
        name: req.body.name,
        subject: {
            _id: subject._id, 
        }
    });

    const chapter = await chapterSave.save();
    res.status(200).send(chapter);
}

exports.update = async (req, res) => {

    const errorResult = validate(req.body, true);
    /** Check User input with JOI  */
    if (errorResult.error)
        return res.status(400).send(errorResult.error.message)

    /** Validate Chapter id */
    const isValidChapterId = ObjectId.isValid(req.params.id);
    if (!isValidChapterId)
        return res.status(404).send('Please enter valid chapter id...!!!');

    /** Validate Chapter id */
    if (req.body.subjectId) {
        const isValidSubjectId = ObjectId.isValid(req.body.subjectId);
        if (!isValidSubjectId)
            return res.status(404).send('Please enter valid Subject id...!!!');
    }
    let subject;
    let chapter_update;

    if (req.body.subjectId) {
        subject = await Subject.findById(req.body.subjectId);
        if (!subject)
            return res.status(200).send('Invalid Subject Id');

        chapter_update = {
            name: req.body.name,
            subject: {
                _id: subject._id 
            }
        };

    } else {
        chapter_update = {
            name: req.body.name
        };
    }
    const chapterUpdate = await Chapter.findByIdAndUpdate(req.params.id, chapter_update, { new: true });
    return res.status(200).send(chapterUpdate);

}

exports.delete = async (req, res) => {
    /** Validate chapter id */
    const isValidParam = ObjectId.isValid(req.params.id);
    if (!isValidParam)
        return res.status(404).send('Please enter valid chapter id...!!!');

    /** delete chapter into database */
    const queryResult = await Chapter.findByIdAndRemove(req.params.id);

    res.status(200).send(queryResult);
}
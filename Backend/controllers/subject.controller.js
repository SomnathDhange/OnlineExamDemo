const { Subject, validate } = require('../models/subject.model');

const ObjectId = require('mongoose').Types.ObjectId;
exports.getAll = async (req, res) => {
    const queryResult = await Subject.find();
    return res.status(200).send(queryResult);
}

exports.getById = async (req, res) => {
    const isValidId = ObjectId.isValid(req.params.id);
    if (!isValidId)
        return res.status(400).send('plz enter valid subject Id');

    const subject = await Subject.findById(req.params.id);
    return res.status(200).send(subject)
}

exports.create = async (req, res) => {

    /** Validate User input using JOI */
    const result = validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error.message)
    }

    /** Check the error customer already registerd or not */
    let subject = await Subject.findOne({ name: req.body.name })
    if (subject)
        return res.status(400).send('subject already in database');

    subject = new Subject({
        name: req.body.name
    });

    /** Validate User input using JOI */
    const queryResult = await subject.save()
    return res.status(200).send(queryResult)

}

exports.update = async (req, res) => {
    /** Validate User input using JOI */
    const result = validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error.message)
    }

    /** Validate User input using JOI */
    const isValidId = ObjectId.isValid(req.params.id);
    if (!isValidId)
        return res.status(400).send('plz enter valid subject Id')

    const subject = {
        name: req.body.name
    };

    const subjectUpdate = await Subject.findByIdAndUpdate(req.params.id, subject, { new: true });
    return res.status(200).send(subjectUpdate);
}

exports.delete = async (req, res) => {
    const isValidId = ObjectId.isValid(req.params.id);
    if (!isValidId) {
        return res.status(400).send('plz enter valid subject Id')
    }

    const queryResult = await Subject.findByIdAndRemove(req.params.id);
    return res.status(200).send(queryResult);

}
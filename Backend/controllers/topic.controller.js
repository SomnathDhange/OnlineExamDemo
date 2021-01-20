const Topic = require('../models/topic.model');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAll = async (req, res) => {
    const topics = await Topic.find();
    return res.status(200).send(200);
}

exports.create = async (req, res) => {
    const topic = new Topic({
        name: req.body.name,
        subjectId: req.body.subjectId,
        chapterId: req.body.chapterId
    });

    const queryResult = topic.save();
    return res.status(200).send(queryResult);
}
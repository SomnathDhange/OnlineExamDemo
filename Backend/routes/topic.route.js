const TopicController = require('../controllers/topic.controller');
const express = require('express');
const router = express.Router();

router.get('/', TopicController.getAll);
router.post('/', TopicController.create);

module.exports = router;
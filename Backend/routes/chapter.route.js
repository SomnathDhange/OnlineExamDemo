const ChapterController = require('../controllers/chapter.controller');
const express = require('express');
const router = express.Router();

router.get('/', ChapterController.getAll);
router.get('/:id', ChapterController.getById);
router.post('/', ChapterController.create);
router.put('/:id', ChapterController.update);
router.delete('/:id', ChapterController.delete);

module.exports = router;
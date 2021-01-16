const SubjectController = require('../controllers/subject.controller');
const express = require('express');
const router = express.Router();

router.get('/', SubjectController.getAll);
router.get('/:id', SubjectController.getById);
router.post('/', SubjectController.create);
router.put('/:id', SubjectController.update);
router.delete('/:id', SubjectController.delete);

module.exports = router;
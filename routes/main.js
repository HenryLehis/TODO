const express = require('express');
const tasksController = require('../controllers/tasksController');
const router = express.Router();

router.get('/', tasksController.getMainPage);

router.post("/", tasksController.postnewTask);
router.post("/delete", tasksController.deleteTask);

module.exports = router;
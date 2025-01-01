const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

function setRoutes(app) {
    router.get('/tasks', indexController.getTasks.bind(indexController));
    router.post('/tasks', indexController.addTask.bind(indexController));
    
    app.use('/api', router);
}

module.exports = setRoutes;
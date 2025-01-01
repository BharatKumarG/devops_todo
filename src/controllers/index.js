class IndexController {
    constructor() {
        this.tasks = [];
    }

    getTasks(req, res) {
        res.json(this.tasks);
    }

    addTask(req, res) {
        const newTask = req.body;
        this.tasks.push(newTask);
        res.status(201).json(newTask);
    }
}

module.exports = new IndexController();
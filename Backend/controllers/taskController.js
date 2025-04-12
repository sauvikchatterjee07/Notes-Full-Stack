const Task = require("../models/taskModel");


exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

//Red:
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task)
            return res.status(404).json({
                message: "no such task with this id found",
            });

        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!task)
            return res.status(404).json({
                message: "Task not found",
            });

        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task)
            return res.status(404).json({
                message: "Task not found",
            });

        res.status(200).json({ message: "task deleted successfully", task });
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
};

exports.getTasksByPriority = async (req, res) => {
    const priority = req.params.priority.toLowerCase();
    try {
        const tasksByPriority = await Task.find({ priority });

        res.status(200).json(tasksByPriority);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getCompletedTasks = async (req, res) => {
    try {
        const Completedtasks = await Task.find({ completed: true });

        res.status(200).json(Completedtasks);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getPendingTasks = async (req, res) => {
    try {
        const Pendingtasks = await Task.find({ completed: false });

        res.status(200).json(Pendingtasks);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getTasksDueToday = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const getTodaysTasks = await Task.find({
            dueDate: {
                $gte: today,
                $lt: tomorrow,
            },
            completed: false,
        });

        if (!getTodaysTasks) {
            return res.status(400).json({
                message: "No such task found",
            });
        }

        res.status(200).json(getTodaysTasks);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getOverDueTasks = async (req, res) => {
    try {
        const today = new Date();

        const getOverDueTasks = await Task.find({
            dueDate: {
                $lt: today,
            },
            completed: false,
        });

        if (!getOverDueTasks) {
            return res.status(400).json({
                message: "No such task found",
            });
        }

        res.status(200).json(getOverDueTasks);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

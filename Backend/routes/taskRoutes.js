const express = require("express");
const router = express.Router();
const auth_mid=require('../middleware/Auth_middleware')

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksByPriority,
    getCompletedTasks,
    getPendingTasks,
    getTasksDueToday,
    getOverDueTasks,
    
} = require("../controllers/taskcontroller");



router.post("/task",auth_mid, createTask); //http://localhost:8000/api/tasks
router.get("/tasks",auth_mid, getTasks);
router.get("/tasks/:id",auth_mid, getTaskById);
router.put("/tasks/:id",auth_mid, updateTask);
router.delete("/tasks/:id",auth_mid, deleteTask);

router.get("/tasks/priority/:priority",auth_mid, getTasksByPriority);
router.get("/tasks/completed",auth_mid, getCompletedTasks);
router.get("/tasks/pending",auth_mid, getPendingTasks);
router.get("/tasks/due/today",auth_mid, getTasksDueToday);
router.get("/tasks/overdue",auth_mid, getOverDueTasks);

module.exports = router;

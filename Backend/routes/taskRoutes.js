const express = require("express");
const router = express.Router();

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
} = require("../controllers/taskController");

router.post("/task", createTask); //http://localhost:8000/api/tasks
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

router.get("/tasks/priority/:priority", getTasksByPriority);
router.get("/tasks/completed", getCompletedTasks);
router.get("/tasks/pending", getPendingTasks);
router.get("/tasks/due/today", getTasksDueToday);
router.get("/tasks/overdue", getOverDueTasks);

module.exports = router;

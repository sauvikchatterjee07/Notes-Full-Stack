import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "http://13.201.74.124/5000/api";

export const getAllTasks = () => axios.get(`${BASE_URL}/tasks`);
export const getTaskbyId = (id) => axios.get(`${BASE_URL}/tasks/${id}`);
export const createTask = (taskData) =>
  axios.post(`${BASE_URL}/task`, taskData);
export const updateTask = (id, taskData) =>
  axios.put(`${BASE_URL}/tasks/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/tasks/${id}`);

export const getTaskByPriority = (priority) =>
  axios.get(`${BASE_URL}/tasks/${priority}`);
export const getCompletedTasks = () => axios.get(`${BASE_URL}/tasks/completed`);
export const getPendingTasks = () => axios.get(`${BASE_URL}/tasks/pending`);
export const getTasksDueToday = () => axios.get(`${BASE_URL}/tasks/due/today`);
export const getOverDueTasks = () => axios.get(`${BASE_URL}/tasks/overdue`);

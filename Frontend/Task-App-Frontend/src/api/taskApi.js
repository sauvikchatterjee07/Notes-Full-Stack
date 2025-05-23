import axios from "axios";

// const BASE_URL = "http://localhost:5001/api";

const BASE_URL = "http://3.111.57.161:5000/api";

// const BASE_URL = "http://3.109.158.79/v1/api";

//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git push -u origin main

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

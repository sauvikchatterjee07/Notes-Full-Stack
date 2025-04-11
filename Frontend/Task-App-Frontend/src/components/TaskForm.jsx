import React, { useState } from "react";
import { createTask } from "../api/taskApi";

const TaskForm = ({ onTaskCreated }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "medium",
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const formatDateForBackend = (date) => {
        const [year, month, dt] = date.split("-");
        return `${dt}-${month}-${year}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!task || !task.dueDate) {
            alert("Title and Due Date are mandatory");
            return;
        }

        try {
            const formattedTask = {
                ...task,
                dueDate: formatDateForBackend(task.dueDate),
            };

            console.log("hello");

            await createTask(formattedTask);
            console.log("hello22");

            setTask({
                title: "",
                description: "",
                dueDate: "",
                priority: "medium",
            });

            onTaskCreated();
        } catch (e) {
            console.error("Error creating a task");
            alert("Error creating a task");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 mb-10 border-gray-200"
        >
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Create a new task
            </h2>
            <div className="grid gap-4 mb-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={task.title}
                    onChange={handleChange}
                    className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-blue-400 outline-none"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleChange}
                    className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-blue-400 outline-none"
                    required
                />
                <input
                    type="date"
                    name="dueDate"
                    placeholder="Date to be completed"
                    value={task.dueDate}
                    onChange={handleChange}
                    className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-blue-400 outline-none"
                    required
                />
                <select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-blue-400 outline-none"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-950 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
            >
                Submit
            </button>
        </form>
    );
};

export default TaskForm;

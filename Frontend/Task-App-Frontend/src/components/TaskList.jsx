import React, { useEffect, useState } from "react";
import {
    deleteTask,
    getAllTasks,
    getPendingTasks,
    getTaskByPriority,
    getTasksDueToday,
} from "../api/taskApi";

const TaskList = ({ refresh }) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    const fetchData = async () => {
        let res;
        if (filter === "High Priority") {
            res = await getTaskByPriority("high");
        } else if (filter === "Due Today") {
            res = await getTasksDueToday();
        } else if (filter === "Pending") {
            res = await getPendingTasks();
        } else {
            res = await getAllTasks();
        }

        setTasks(res.data);
    };

    useEffect(() => {
        fetchData();
    }, [filter, refresh]);

    const handleDelete = async (id) => {
        await deleteTask(id);
    };

    return (
        <div>
            <div className="flex flex-wrap gap-3 mb-6">
                {[
                    { label: "All", value: "all", color: "bg-gray-200" },
                    {
                        label: "High Priority",
                        value: "High Priority",
                        color: "bg-red-200",
                    },
                    {
                        label: "Due Today",
                        value: "Due Today",
                        color: "bg-green-200",
                    },
                    {
                        label: "Pending",
                        value: "Pending",
                        color: "bg-yellow-200",
                    },
                ].map((btn) => (
                    <button
                        key={btn.value}
                        onClick={() => setFilter(btn.value)}
                        className={`px-4 py-1.5 rounded-full font-medium text-sm transition hover:brightness-70 ${btn.color}`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
            <ul className="grid gap-6">
                {tasks.length === 0 ? (
                    <div className="text-center text-gray-500 col-span-full">
                        <p className="text-lg font-medium">No tasks found</p>
                        <p className="text-sm mt-1">
                            Create a Task to get started
                        </p>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <li
                            key={task._id}
                            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale[1.01] transform transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3>{task.title}</h3>
                                <span
                                    className={`text-xs px-3 py-1 rounded-full font-semibold capitalize ${
                                        task.priority === "high"
                                            ? "bg-red-100 text-red-600"
                                            : task.priority === "medium"
                                            ? "bg-yellow-100 text-yellow-500"
                                            : "bg-green-200 text-green-600"
                                    }`}
                                >
                                    {task.priority}
                                </span>
                            </div>

                            {task.description && (
                                <p className="text-gray-600 text-sm mb-4">
                                    {task.description}
                                </p>
                            )}

                            <div>
                                <p>
                                    <span>status</span>
                                    <span>
                                        {task.completed
                                            ? "Completed"
                                            : "Pending"}
                                    </span>
                                </p>
                            </div>

                            <div>
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className=" inline-flex items-center gap-2"
                                ></button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default TaskList;

import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="bg-amber-200">
      <div>
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-800 mb-2">
            My Task Manager
          </h1>
          <p className="text-gray-400">Organize, Prioritize, Accomplish</p>
        </header>

        <TaskForm onTaskCreated={triggerRefresh} />
        <TaskList refresh={refresh} />
      </div>
    </div>
  );
};

export default App;

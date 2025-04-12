import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const triggerRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <div>
                <NavBar/>

                <TaskForm onTaskCreated={triggerRefresh} />
                <TaskList refresh={refresh} />
            </div>
        </div>
    );
};

export default App;

import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import DeleteTask from "./Main/Delete";
import Footer from "./Footer/Footer";
import Form from "./Main/Form";

import CompletedAll from "./Main/CompletedAll";


function Todo() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <>
            <Header addTask={setTasks} tasks={tasks} />
            <Form addTask={setTasks} tasks={tasks} />
            <CompletedAll updateTask={setTasks} tasks={tasks} />
            <DeleteTask updateTask={setTasks} tasks={tasks} />
            <Footer updateTask={setTasks} tasks={tasks} />
        </>
    );
}

export default Todo;
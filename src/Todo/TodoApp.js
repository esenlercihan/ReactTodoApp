import React, { useState, useEffect } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, []);

    return(
        <div className="container border border-dark w-75">
            {console.log("TodoApp")}
            <div className="text-center m-2 p-2 bg-secondary text-white">
                <h5 style={{marginBottom:"0px"}}>TodoApp</h5>
            </div>
            <TodoAdd todos = {todos} setTodos = {setTodos} />
            <TodoInfo todos = {todos} />
            <TodoList todos = {todos} setTodos = {setTodos} />
        </div>
    );
}

export default TodoApp;

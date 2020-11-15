import React, { useState } from 'react';

export default function TodoAdd(props) {

    const [title, setTitle] = useState("");
    const todos = props.todos;

    const update = (value) => {
        setTitle(value);
    }

    const formSubmit = (event) => {
        // TodoApp içerisindeki todos state ini burada güncelleyelim : 
        let todo = { 
            id : todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, 
            title : title, 
            completed : false 
        };

        let newTodos = [...todos, todo];
        props.setTodos(newTodos);
        setTitle("");
        event.preventDefault(); // form submit olunca ekranın yenilenmemesi için
    }

    return (
        <div className="m-2 p-2 ">
            {console.log("TodoAdd")}
            <label>Add New Todo</label>
            <form onSubmit={(event) => formSubmit(event)}>
                <div className="d-flex">
                    <input name="todo" className="form-control" value={title} style={{ width: "70%" }} placeholder="Todo" onChange={event => update(event.target.value)} />
                    <button type="submit" className="btn btn-outline-info btn-sm ml-2">Add Todo</button>
                </div>
            </form>
        </div>
    )
}
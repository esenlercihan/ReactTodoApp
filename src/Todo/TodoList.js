export default function TodoList(props) {
    //console.log("props : ", props);
    const todos = props.todos;

    const remove = (data) => {
        let newTodos = [...todos].filter( o => (o.id !== data.id));
        props.setTodos(newTodos); 
    }

    const changeCompleteState = (data) => {
        let newData = {...data};
        newData.completed = !newData.completed;
        let newTodos = [...todos];
        newTodos.forEach( (o, index) => {
            if(o.id === newData.id) {
                newTodos[index] = newData;
            }
        });
        props.setTodos(newTodos);
    }

    return(
        <div>
            {console.log("TodoList")}
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Process</th>
                </tr>
                </thead>
                <tbody>
                    {
                        todos.map(data => (
                            <tr key={data.id} className={data.completed ? "table-success" : "table-danger"}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td><button className={data.completed ? "btn btn-outline-success" : "btn btn-outline-danger"} onClick={() => changeCompleteState(data)}>{data.completed ? "Completed" : "Not Completed"}</button></td>
                                <td><button className="btn btn-outline-danger" onClick={() => remove(data)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

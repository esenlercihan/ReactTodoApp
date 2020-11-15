export default function TodoInfo(props) {
    const todos = props.todos;
    return (
        <div className="m-2 p-2 ">
            {console.log("TodoInfo")}
            <label>Number of uncompleted todos : {todos.filter(o => (o.completed === false)).length}</label>
        </div>
    )
}
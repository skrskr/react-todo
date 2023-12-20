export function TodoList({ todos, toggleTodo, deleteTodo }) {

    return <ul className='list'>
        {todos.length === 0 && " No Todos"}
        {todos.map(todo => {
            // we set key for each li because react use it internaly to update or change any element
            return <li key={todo.id}>
                <label>
                    <input onChange={e => toggleTodo(todo.id, e.target.checked)} type="checkbox" checked={todo.completed} />
                    {todo.title}
                </label>
                <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
            </li>
        })}

    </ul>
}
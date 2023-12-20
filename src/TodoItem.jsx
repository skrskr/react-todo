export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {

    return <li>
        <label>
            <input onChange={e => toggleTodo(id, e.target.checked)} type="checkbox" checked={completed} />
            {title}
        </label>
        <button onClick={() => deleteTodo(id)} className='btn btn-danger'>Delete</button>
    </li>
}
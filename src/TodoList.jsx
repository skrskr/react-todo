import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    return <ul className='list'>
        {todos.length === 0 && " No Todos"}
        {todos.map(todo => {
            // we set key for each li because react use it internaly to update or change any element
            return <TodoItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} {...todo} key={todo.id} />
        })}

    </ul>
}
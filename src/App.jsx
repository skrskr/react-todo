import { useState } from 'react'
import { NewTodoForm } from './NewTodoForm'

function App() {
  // Every time state changed component will be render again

  const [todos, setTodos] = useState([])

  // will enter infite loop 
  // every time value of state change component will render again
  // setNewItem("fffffff")

  function addTodo(newItem) {
    setTodos((currentTodos) => [...currentTodos, {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false
    }])
  }

  function toggleTodo(id, checked) {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed: checked }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
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
    </>
  )
}

export default App

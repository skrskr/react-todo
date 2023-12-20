import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

function App() {
  // Every time state changed component will be render again

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) {
      return []
    }
    return JSON.parse(localValue)
  })

  // we can't using hooks conditionaly
  // always set hooks on the begining of component
  // Then helper functions
  // then jsx code
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App

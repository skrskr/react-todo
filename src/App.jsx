import { useState } from 'react'

function App() {
  // Every time state changed component will be render again
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  // will enter infite loop 
  // every time value of state change component will render again
  // setNewItem("fffffff")

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem == "") return;
    // will keep only last value added 
    // always start from empty array on useState
    // setTodos([...todos, {
    //   id: crypto.randomUUID(),
    //   title: newItem,
    //   completed: false
    // }])

    // To save current todos and append to it
    // we use arrow function with current value
    setTodos((currentTodos) => [...currentTodos, {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false
    }])

    // cleant input item
    setNewItem("")
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" id='item' />
        </div>
        <button className='btn'>Add</button>
      </form>
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

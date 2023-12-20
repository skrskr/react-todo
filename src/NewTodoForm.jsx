import { useState } from "react";

export function NewTodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("")

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
        // setTodos((currentTodos) => [...currentTodos, {
        //     id: crypto.randomUUID(),
        //     title: newItem,
        //     completed: false
        // }])

        addTodo(newItem)

        // cleant input item
        setNewItem("")
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" id='item' />
        </div>
        <button className='btn'>Add</button>
    </form>
}
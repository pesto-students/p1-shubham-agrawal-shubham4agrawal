import React, { useState } from "react";

export default function TodoApp() {

    let [inputText, setInputText] = useState("");
    let [todoItems, setTodoItems] = useState([]);
    let [todoCount, setTodoCount] = useState(0);

    function handleChange(event) {
        setInputText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(inputText !== '') {
            let newTodo = [];
            setTodoCount(++todoCount);
            newTodo['text'] = inputText;
            newTodo['isCompleted'] = false;
            newTodo['id'] = todoCount;
            setTodoItems(prevItems => {
                return [
                    ...prevItems,
                    newTodo
                ]
            })
            setInputText("");
        }
    }

    function updateTodo(id) {
        const updatedTodos = todoItems.map((item, index) => {
            if(item.id === id) {
                todoItems[index]['isCompleted'] = !item.isCompleted;
            }
            return todoItems[index]
        })
        setTodoItems(updatedTodos)
    }

    function removeTodo(id) {
        const updatedTodoItems = todoItems.filter((item) => item.id !== id)
        setTodoItems(updatedTodoItems)
    }

    return (
        <div className="todo--app">
            <h1 className='main--heading'>Todo App</h1>
            
            <div className="todo--form">
                <form>
                    <input 
                        className="todo--input" 
                        type="text"
                        name="todo_text"
                        value={inputText}
                        onChange={handleChange}
                    />
                    <button
                        className="todo--button-submit"
                        onClick={handleSubmit}
                    >
                        Add Todo
                    </button>
                </form>
            </div>

            {todoItems.length !== 0 ? <h1>Today's Plan</h1> : ''}
            {
                todoItems.map((item) => (
                    <div className="todo--item">
                        <input className="todo--checkbox" type="checkBox" onChange={() => updateTodo(item.id)}></input>
                        <span className={ item.isCompleted ? "todo--text strike" : "todo--text" }>{item.text}</span>
                        <button className="todo--button-remove" onClick={() => removeTodo(item.id)}>
                           x
                        </button>
                    </div>
                ))
            }
             
        </div>
    );

}
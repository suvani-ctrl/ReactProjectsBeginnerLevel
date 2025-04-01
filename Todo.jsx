import { useState } from "react";
import React from 'react';
import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => [
            ...todos,
            {
                text: input,
                id: Math.floor(Math.random() * 1000),
            },
        ]);
        setInput("");
    };

    const removeTodo = (id) => {
        setTodos(todos => todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <div className="container">
                <input 
                    type="text"
                    placeholder="New Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSubmit}>Add Todo</button>
            </div>

            <ul className="todo-list">
                {todos.map(({ text, id }) => (
                    <li className="todo" key={id}>
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;

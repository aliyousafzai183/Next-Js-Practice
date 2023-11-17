"use client"

import { useTodos } from "@/store/TodosStore"

const ListTodos = () => {
    const { todos, handleDeleteTodo, toggleTodoAsCompleted } = useTodos();

    const completedTodos = todos.filter((todo) => todo.completed);
    const pendingTodos = todos.filter((todo) => !todo.completed);

    return (
        <ul className="list-none" >
            <h3>{pendingTodos.length > 0 && "Pending"}</h3>
            {pendingTodos.map((todo) => (
                <li key={todo.id}>

                    <input type="checkbox" id={todo.id} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />

                    <label htmlFor={todo.id} >{todo.todoValue}</label>

                </li>
            ))}
            <h3>{completedTodos.length > 0 && "Completed"}</h3>
            {completedTodos.map((todo) => (
                <li key={todo.id}>

                    <input type="checkbox" id={todo.id} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />

                    <label htmlFor={todo.id} >{todo.todoValue}</label>

                    {
                        todo.completed && (
                            <button type="button" onClick={() => handleDeleteTodo(todo.id)} >DELETE</button>
                        )
                    }

                </li>
            ))}
        </ul>
    )
}

export default ListTodos;
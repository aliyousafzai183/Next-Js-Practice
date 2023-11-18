"use client"

import { useTodos } from "@/store/TodosStore"

const ListTodos = () => {
    const { todos, handleDeleteTodo, toggleTodoAsCompleted } = useTodos();

    const completedTodos = todos.filter((todo) => todo.completed);
    const pendingTodos = todos.filter((todo) => !todo.completed);

    return (
        <ul className="list-none border my-5 text-center" >
            <h3 className="text-2xl text-cyan-500 font-medium mb-3" >{pendingTodos.length > 0 && "Pending"}</h3>
            {pendingTodos.map((todo) => (
                <li key={todo.id} className="my-4" >

                    <input className="ckecked:bg-black-500 mr-3" type="checkbox" id={todo.id} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />

                    <label className="text-md text-black font-medium hover:font-semibold transition" htmlFor={todo.id} >{todo.todoValue}</label>

                </li>
            ))}
            <h3 className="text-2xl text-cyan-500 font-medium mt-10 mb-3">{completedTodos.length > 0 && "Completed"}</h3>
            {completedTodos.map((todo) => (
                <li key={todo.id} className="my-4">

                    <input className="ckecked:bg-black-500 mr-3" type="checkbox" id={todo.id} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />

                    <label className="text-md text-black font-medium hover:font-semibold transition" htmlFor={todo.id} >{todo.todoValue}</label>

                    {
                        todo.completed && (
                            <button className="border rounded-full bg-red-500 px-2 ml-4 border-red-500 text-white font-medium hover:border-0 hover:bg-red-700 hover:text-white" type="button" onClick={() => handleDeleteTodo(todo.id)} >DELETE</button>
                        )
                    }

                </li>
            ))}
        </ul>
    )
}

export default ListTodos;
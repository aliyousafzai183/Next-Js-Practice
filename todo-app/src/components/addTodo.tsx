"use client"
import { useTodos } from "@/store/TodosStore";
import { FormEvent, useState } from "react";

const AddTodo = () => {
    const [todo, setTodo] = useState<string>("");
    const { handleAddTodo } = useTodos();

    const handleFormSubmit = (value: FormEvent<HTMLFormElement>): void => {
        value.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }

    return (
        <form onSubmit={handleFormSubmit} >
            <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="Buy groceries today" name="" id="" />
            <button type="submit" > ADD </button>
        </form>
    )
}

export default AddTodo;
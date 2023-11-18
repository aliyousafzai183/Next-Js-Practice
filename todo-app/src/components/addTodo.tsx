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
        <form onSubmit={handleFormSubmit} className="flex justify-center" >
            <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="Buy groceries today"
                className="border border-cyan-500 px-2 mx-4 rounded-full border-2 transition hover:border-black text-black font-medium"
            />
            <button type="submit" className="border px-2 rounded-full border-black hover:bg-cyan-600 text-black  hover:text-white transition-all hover:border-0 font-medium" > ADD </button>
        </form>
    )
}

export default AddTodo;
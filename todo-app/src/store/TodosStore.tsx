"use client"
import { ReactNode, useContext, useState, createContext } from "react";

export type Todo = {
    id: string;
    todoValue: string;
    completed: boolean;
    createdAt: Date;
};

export type todosContext = {
    todos: Todo[];
    handleAddTodo: (todoValue: string) => void;
    handleDeleteTodo: (todoId: string) => void;
    toggleTodoAsCompleted: (todoId: string) => void;
}

export const TodoContext = createContext<todosContext | null>(null);

export const Provider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (todoValue: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                todoValue,
                completed: false,
                createdAt: new Date()
            },
            ...prev
            ]

            return newTodos;
        }
        );
    };

    const handleDeleteTodo = (todoId: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    }

    const toggleTodoAsCompleted = (todoId: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <TodoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo, toggleTodoAsCompleted }} >
            {children}
        </TodoContext.Provider>
    )

}

// context api
export const useTodos = () => {
    const todosContextValue = useContext(TodoContext);
    if (!todosContextValue) {
        throw new Error("Use Todos context used outside context");
    }

    return todosContextValue;
}
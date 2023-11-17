import AddTodo from "@/components/AddTodo";
import ListTodos from "@/components/listTodos";

export default function Home() {
  return (
    <main>
      <h2>Todo App (CRUD Example)</h2>
      <AddTodo />
      <ListTodos />
    </main>
  )
}

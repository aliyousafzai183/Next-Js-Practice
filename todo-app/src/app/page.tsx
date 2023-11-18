import ListTodos from "@/components/listTodos";
import AddTodo from "@/components/addTodo";

export default function Home() {
  return (
    <main className="justify-center text-center">
      <h2 className="text-3xl font-bold my-10" >Todo App (CRUD)</h2>
      <AddTodo />
      <ListTodos />
    </main>
  )
}

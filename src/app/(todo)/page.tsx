import AddTodo from '@/components/todo/addTodo';
import TodoList from '@/components/todo/todoList';

export default function Home() {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  );
}

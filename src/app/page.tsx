import AddTodo from '@/components/addTodo';
import TodoList from '@/components/todoList';

export default function Home() {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  );
}

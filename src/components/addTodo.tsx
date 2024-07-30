'use client';

import { FC } from 'react';
import AddButton from './addButton';
import AddTodoForm from './addTodoForm';

const AddTodo: FC = () => {
  return (
    <div className="flex gap-3 m-3">
      <AddTodoForm />
      <AddButton />
    </div>
  );
};
export default AddTodo;

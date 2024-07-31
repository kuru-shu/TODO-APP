'use client';

import { FC } from 'react';
import AddButton from './addButton';
import AddTodoForm from './addTodoForm';

const AddTodo: FC = () => {
  return (
    <div className="flex">
      <AddTodoForm />
      <AddButton />
    </div>
  );
};
export default AddTodo;

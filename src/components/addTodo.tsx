'use client';

import { FC } from 'react';
import AddButton from './addButton';
import AddTodoForm from './addTodoForm';

const AddTodo: FC = () => {
  return (
    <>
      <AddTodoForm />
      <AddButton />
    </>
  );
};
export default AddTodo;

'use client';

import { completedListAtom } from '@/state/completedList';
import { todoListAtom } from '@/state/todoList';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import DeleteButton from '../shared/deleteButton';
import { Button } from '../ui/button';

const TodoList: FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [completedList, setCompletedList] = useRecoilState(completedListAtom);
  const onClickCompleted = (index: number, completedItem: string) => {
    const newCompletedList = [...completedList];
    newCompletedList.push(completedItem);
    setCompletedList(newCompletedList);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const onClickDelete = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <ul>
        {todoList.map((todoItem, index) => {
          return (
            <li key={index} className="mt-2 text-center">
              <span className="mr-1">{todoItem.title}</span>
              <Button
                className="h-5 bg-amber-400	hover:bg-amber-500"
                onClick={() => onClickCompleted(index, todoItem.title)}
              >
                完了
              </Button>
              <DeleteButton onClick={() => onClickDelete(index)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;

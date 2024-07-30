'use client';

import { completedListAtom } from '@/state/completedList';
import { todoListAtom } from '@/state/todoList';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from '../ui/button';

const TodoList: FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [completedList, setCompletedList] = useRecoilState(completedListAtom);
  const onClick = (index: number, completedItem: string) => {
    const newCompletedList = [...completedList];
    newCompletedList.push(completedItem);
    setCompletedList(newCompletedList);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <ul>
        {todoList.map((todoItem, index) => {
          return (
            <li key={index} className="mt-2">
              <span className="mr-1">{todoItem}</span>
              <Button className="" onClick={() => onClick(index, todoItem)}>
                完了
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;

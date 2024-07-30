'use client';

import { todoListAtom } from '@/state/todoList';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from '../ui/button';

const TodoList: FC = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div>
      <ul>
        {todoList.map((todoItem, index) => {
          return (
            <li key={index} className="mt-2">
              <span className="mr-1">{todoItem}</span>
              <Button className="">完了</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;

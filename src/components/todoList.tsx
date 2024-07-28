'use client';

import { todoListAtom } from '@/state/todoList';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const TodoList: FC = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div>
      <ul>
        {todoList.map((todoItem, index) => {
          return (
            <li key={index}>
              <span>{todoItem}</span>
              <button>完了</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;

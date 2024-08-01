import { TodoItem } from '@/types/todoItemType';
import { atom } from 'recoil';

export const todoListAtom = atom<TodoItem[]>({
  key: 'todoList',
  default: [],
});

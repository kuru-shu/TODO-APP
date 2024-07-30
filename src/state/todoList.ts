import { atom } from 'recoil';

export const todoListAtom = atom<string[]>({
  key: 'todoList',
  default: [],
});

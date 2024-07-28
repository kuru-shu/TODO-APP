import { atom } from 'recoil';

export const todoTextAtom = atom<string>({
  key: 'todoText',
  default: '',
});

import { atom } from 'recoil';

export const completedListAtom = atom<string[]>({
  key: 'completedList',
  default: [],
});

'use client';

import { completedListAtom } from '@/state/completedList';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import DeleteButton from '../shared/deleteButton';

const CompletedList: FC = () => {
  const [completedList, setCompletedList] = useRecoilState(completedListAtom);

  const onClickDelete = (index: number) => {
    const newCompletedList = [...completedList];
    newCompletedList.splice(index, 1);
    setCompletedList(newCompletedList);
  };

  return (
    <div className="text-center">
      <ul>
        {completedList.map((completedItem, index) => {
          return (
            <li key={index} className="mt-2">
              <span className="mr-1">{completedItem}</span>
              <DeleteButton onClick={() => onClickDelete(index)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CompletedList;

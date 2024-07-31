'use client';

import { completedListAtom } from '@/state/completedList';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const CompletedList: FC = () => {
  const completedList = useRecoilValue(completedListAtom);

  return (
    <div className="text-center">
      <ul>
        {completedList.map((completedItem, index) => {
          return (
            <li key={index} className="mt-2">
              <span className="mr-1">{completedItem}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CompletedList;

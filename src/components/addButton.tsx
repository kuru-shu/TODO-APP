import { todoListAtom } from '@/state/todoList';
import { todoTextAtom } from '@/state/todoText';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

const AddButton: FC = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextAtom);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const onClick = () => {
    const newTodoList = [...todoList];
    newTodoList.push(todoText);
    setTodoList(newTodoList);
    setTodoText('');
  };

  return <button onClick={onClick}>追加する</button>;
};
export default AddButton;

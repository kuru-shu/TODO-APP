import { todoListAtom } from '@/state/todoList';
import { todoTextAtom } from '@/state/todoText';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from '../ui/button';

const AddButton: FC = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextAtom);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const onClick = () => {
    const newTodoList = [...todoList];
    newTodoList.push({ title: todoText });
    setTodoList(newTodoList);
    setTodoText('');
  };
  return <Button onClick={onClick}>追加</Button>;
};
export default AddButton;

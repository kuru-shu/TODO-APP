import { todoListAtom } from '@/state/todoList';
import { todoTextAtom } from '@/state/todoText';
import { ChangeEvent, FC } from 'react';
import { useRecoilState } from 'recoil';
import { Input } from '../ui/input';

const AddTodoForm: FC = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextAtom);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    const newTodoList = [...todoList];
    newTodoList.push({ title: todoText });
    setTodoList(newTodoList);
    setTodoText('');
  };

  return (
    <Input
      type="text"
      value={todoText}
      placeholder="タスクを入力"
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mr-2"
    />
  );
};
export default AddTodoForm;

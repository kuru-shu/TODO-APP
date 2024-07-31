import { todoTextAtom } from '@/state/todoText';
import { ChangeEvent, FC } from 'react';
import { useRecoilState } from 'recoil';
import { Input } from '../ui/input';

const AddTodoForm: FC = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextAtom);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  return (
    <Input
      type="text"
      value={todoText}
      placeholder="タスクを入力"
      onChange={onChange}
      className="mr-2"
    />
  );
};
export default AddTodoForm;

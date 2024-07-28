import { todoTextAtom } from '@/state/todoText';
import { ChangeEvent, FC } from 'react';
import { useRecoilState } from 'recoil';

const AddTodoForm: FC = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextAtom);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  return <input type="text" value={todoText} onChange={onChange} />;
};
export default AddTodoForm;

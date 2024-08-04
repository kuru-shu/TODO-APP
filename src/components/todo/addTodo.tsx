'use client';

import { todoListAtom } from '@/state/todoList';
import { todoTextAtom } from '@/state/todoText';
import { Dialog } from '@radix-ui/react-dialog';
import { ChangeEvent, FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from '../ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AddTodo: FC = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [todoText, setTodoText] = useRecoilState(todoTextAtom);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
    if (todoText !== '') {
      setIsEmpty(false);
    }
  };
  const onClick = () => {
    setIsButtonClicked(true);
    console.log(todoText);
    if (todoText === '') {
      setIsEmpty(true);
      setIsButtonClicked(false);
      return;
    }
    setIsEmpty(false);
    const newTodoList = [...todoList];
    newTodoList.push({ title: todoText });
    setTodoList(newTodoList);
    setTodoText('');
  };
  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button>TODOを追加する</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>新しいTODO</DialogTitle>
            <DialogDescription>タスクを入力してください</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                value={todoText}
                onChange={onChange}
                placeholder="タイトルを入力"
                className="col-span-3"
              />
            </div>
          </div>
          {isEmpty && isButtonClicked ? (
            <span className="text-red-600">入力してください</span>
          ) : null}
          <DialogFooter>
            <DialogClose disabled={isEmpty}>
              <Button onClick={onClick}>追加</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddTodo;

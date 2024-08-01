import { FC } from 'react';
import { Button } from '../ui/button';

type Props = {
  onClick: () => void;
};

const DeleteButton: FC<Props> = (props) => {
  return (
    <Button
      className="h-5 bg-slate-500	hover:bg-slate-600"
      onClick={props.onClick}
    >
      削除
    </Button>
  );
};
export default DeleteButton;

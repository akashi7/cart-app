import { FC, ReactElement, ChangeEvent } from "react";

interface Props {
  name: string;
  type: string;
  placeHolder: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = (props: Props): ReactElement => {
  return (
    <input
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeHolder}
    />
  );
};

export { Input };

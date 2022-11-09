import { FC, ReactElement } from "react";

interface Props {
  name: string;
  type: string;
}

const Input: FC<Props> = (props: Props): ReactElement => {
  return <input name={props.name} />;
};

export { Input };

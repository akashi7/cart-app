import { FC, ReactElement } from "react";
import { Input } from "../common/input";

const CreateMovie: FC = (): ReactElement => {
  return (
    <div>
      <h1>Create Movie</h1>
      <form>
        <Input name={"movieName"} type={"text"} />
      </form>
    </div>
  );
};
export default CreateMovie;

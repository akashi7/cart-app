import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { MovieContext } from "../../contexts/movieContext";
import { mInterface, MovieContextType } from "../../utils/interfaces";
import { Input } from "../common/input";
import { createMovieValidationsSchema } from "./validation";

const CreateMovie: FC = (): ReactElement => {
  const { saveMovie, movies } = useContext(MovieContext) as MovieContextType;

  const [state, setState] = useState<mInterface>({
    title: "",
    year: "",
    director: "",
    writer: "",
  });

  const [errors, setErrors] = useState<mInterface>({
    title: "",
    year: "",
    director: "",
    writer: "",
  });

  function OnChange(e: ChangeEvent<HTMLInputElement>): void {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log({ movies });
  }, [movies]);

  console.log(errors);

  async function onSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    const validation = await createMovieValidationsSchema
      .validate(state)
      .then(() => {
        return true;
      })
      .catch((err) => {
        setErrors({ ...errors, [err.path]: err.message });
        return false;
      });
    console.log({ validation });
    if (validation) {
      saveMovie(state);
    }
  }

  return (
    <div>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmit}>
        <Input
          name={"title"}
          type={"text"}
          onChange={OnChange}
          placeHolder={"title"}
        />
        <Input
          name={"year"}
          type={"text"}
          onChange={OnChange}
          placeHolder={"year"}
        />
        <Input
          name={"director"}
          type={"text"}
          onChange={OnChange}
          placeHolder={"director"}
        />
        <Input
          name={"writer"}
          type={"text"}
          onChange={OnChange}
          placeHolder={"writer"}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default CreateMovie;

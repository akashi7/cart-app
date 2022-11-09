import { createContext, FC, useState } from "react";
import {
  mInterface,
  MovieContextType,
  ProviderProps,
} from "../utils/interfaces";

const movieContextDefaultValues: MovieContextType = {
  movies: [],
  saveMovie: () => {},
};

export const MovieContext = createContext<MovieContextType>(
  movieContextDefaultValues
);

export const MovieProvider: FC<ProviderProps> = ({ children }) => {
  const [movies, setMovie] = useState<mInterface[]>([]);

  const saveMovie = (movie: mInterface) => {
    setMovie([...movies, movie]);
  };

  return (
    <MovieContext.Provider value={{ movies, saveMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

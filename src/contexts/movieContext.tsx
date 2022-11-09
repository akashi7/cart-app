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
    const newMovie: mInterface = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      writer: movie.writer,
    };
    setMovie([...movies, newMovie]);
  };

  return (
    <MovieContext.Provider value={{ movies, saveMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export interface mInterface {
  title: string;
  year: string;
  director: string;
  writer: string;
}

export type MovieContextType = {
  movies: mInterface[];
  saveMovie: (movie: mInterface) => void;
};

export interface ProviderProps {
  children: React.ReactNode;
}

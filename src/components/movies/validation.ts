import * as Yup from "yup";

export const createMovieValidationsSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  year: Yup.number().required("Year is required"),
  director: Yup.string().required("Director is required"),
  writer: Yup.string().required("Writer is required"),
});

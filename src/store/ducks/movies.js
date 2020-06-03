import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  getMovies: [""],
  getMoviesSuccess: ["movies"],
  getMovie: ["id"],
  getMovieSuccess: ["movie"],
});

export const MoviesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable([]);

export const success = (state = INITIAL_STATE, action) => [action.movies];

export const movie = (state = INITIAL_STATE, action) => [
  ...state.splice(0, 1),
  action.movie,
];

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MOVIES_SUCCESS]: success,
  [Types.GET_MOVIE_SUCCESS]: movie,
});

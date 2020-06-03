import { all, takeLatest } from "redux-saga/effects";

import { MoviesTypes } from "../ducks/movies";
import { getMovies, getMovie } from "./movies";

import { AuthTypes } from "../ducks/auth";
import { createUser } from "./auth";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.CREATE_USER, createUser),
    takeLatest(MoviesTypes.GET_MOVIES, getMovies),
    takeLatest(MoviesTypes.GET_MOVIE, getMovie),
  ]);
}

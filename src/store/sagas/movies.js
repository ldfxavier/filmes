import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import MoviesActions from "../ducks/movies";

export function* getMovies() {
  try {
    const response = yield call(
      api.get,
      "discover/movie?api_key=a2e4b8b31e95a18b4eb31ee85eb783e0&page=1&language=pt-BR"
    );
    yield put(MoviesActions.getMoviesSuccess(response.data.results));
  } catch (e) {
    console.tron.log(e);
  }
}

export function* getMovie({ id }) {
  try {
    const response = yield call(
      api.get,
      `/movie/${id}?api_key=a2e4b8b31e95a18b4eb31ee85eb783e0&page=1&language=pt-BR`
    );
    yield put(MoviesActions.getMovieSuccess(response.data));
  } catch (e) {
    console.tron.log(e);
  }
}

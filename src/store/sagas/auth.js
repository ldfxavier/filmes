import { put } from "redux-saga/effects";

import AuthActions from "../ducks/auth";

export function* createUser(dados) {
  yield put(AuthActions.createUserSuccess(dados));
}

import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  createUser: ["nome", "email", "password"],
  createUserSuccess: ["user"],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable([]);

export const createUserSuccess = (state = INITIAL_STATE, action) =>
  action.user.dados;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
});

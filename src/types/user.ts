export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  SET_USER_ROLE = 'SET_USER_ROLE'
}
export interface User {
  id?: number | undefined;
  first_name?: string;
  last_name?: string;
  username?: string;
}

export interface UserState {
  user: User | null;
  role: string | undefined;
  loading: Boolean;
  error: null | String;
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USER;
}
interface FetchUserActionSuccess {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}
interface FetchUserActionError {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

interface SetUserRoleAction {
  type: UserActionTypes.SET_USER_ROLE;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserActionSuccess
  | FetchUserActionError
  | SetUserRoleAction;

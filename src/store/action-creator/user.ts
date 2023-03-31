import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { User, UserAction, UserActionTypes } from '../../types/user';

export const fetchUser = (user: User) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: user });
  };
};

export const setUserRole = (role: string) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.SET_USER_ROLE, payload: role });
  };
};

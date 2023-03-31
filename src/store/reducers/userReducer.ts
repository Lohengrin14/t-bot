import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initalState: UserState = {
  user: null,
  loading: false,
  error: null,
  role: undefined
};

export const userReducer = (
  state = initalState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { loading: true, error: null, role: undefined, user: null };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        role: undefined,
        user: action.payload
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
        role: undefined,
        user: null
      };
    case UserActionTypes.SET_USER_ROLE:
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

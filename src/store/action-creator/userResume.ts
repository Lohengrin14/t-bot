import { Dispatch } from 'react';
import {
  stringArrayValueKeys,
  stringValueKeys,
  UserResume,
  UserResumeAction,
  userResumeActionTypes
} from '../../types/userResume';

export const deleteUserResume = (id: number) => {
  return (dispatch: Dispatch<UserResumeAction>) => {
    dispatch({ type: userResumeActionTypes.DELETE_USER_RESUME, payload: id });
  };
};

export const updateUserResume = (resume: UserResume) => {
  return (dispatch: Dispatch<UserResumeAction>) => {
    dispatch({
      type: userResumeActionTypes.UPDATE_USER_RESUME,
      payload: resume
    });
  };
};

export const stringPropertyUpdateUserResume = (
  property: stringValueKeys,
  data: string
) => {
  return (dispatch: Dispatch<UserResumeAction>) => {
    dispatch({
      type: userResumeActionTypes.STRING_PROPERTY_UPDATE_USER_RESUME,
      payload: {
        property,
        data
      }
    });
  };
};

export const arrayPropertyPopDataUserResume = (
  property: stringArrayValueKeys,
  data: string
) => {
  return (dispatch: Dispatch<UserResumeAction>) => {
    dispatch({
      type: userResumeActionTypes.ARRAY_PROPERTY_POP_DATA_USER_RESUME,
      payload: {
        property,
        data
      }
    });
  };
};

export const arrayPropertyPushDataUserResume = (
  property: stringArrayValueKeys,
  data: string
) => {
  return (dispatch: Dispatch<UserResumeAction>) => {
    dispatch({
      type: userResumeActionTypes.ARRAY_PROPERTY_PUSH_DATA_USER_RESUME,
      payload: {
        property,
        data
      }
    });
  };
};

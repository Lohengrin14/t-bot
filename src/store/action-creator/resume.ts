import axios from 'axios';
import { Dispatch } from 'react';
import { ResumeAction, ResumeActionTypes } from '../../types/resume';
import { resumeApiUrl } from '../../utilites/constants/apiUrl';

export const fetchResume = () => {
  return async (dispatch: Dispatch<ResumeAction>) => {
    try {
      dispatch({ type: ResumeActionTypes.FETCH_RESUME });
      const response = await axios.get(resumeApiUrl.getAll);
      dispatch({
        type: ResumeActionTypes.FETCH_RESUME_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResumeActionTypes.FETCH_RESUME_ERROR,
        payload: `Произошла ошибка при загрузке резюме`
      });
    }
  };
};

import axios from 'axios';
import { Dispatch } from 'react';
import { VacancyAction, VacancyActionTypes } from '../../types/vacancy';
import { vacancyApiUrl } from '../../utilites/constants/apiUrl';

export const fetchVacancy = () => {
  return async (dispatch: Dispatch<VacancyAction>) => {
    try {
      dispatch({ type: VacancyActionTypes.FETCH_VACANCY });
      const response = await axios.get(vacancyApiUrl.getAll);
      dispatch({
        type: VacancyActionTypes.FETCH_VACANCY_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: VacancyActionTypes.FETCH_VACANCY_ERROR,
        payload: 'При загрузке резюме произошла ошибка'
      });
    }
  };
};

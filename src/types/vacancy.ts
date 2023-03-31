export enum VacancyActionTypes {
  FETCH_VACANCY = 'FETCH_VACANCY',
  FETCH_VACANCY_SUCCESS = 'FETCH_VACANCY_SUCCESS',
  FETCH_VACANCY_ERROR = 'FETCH_VACANCY_ERROR'
}
interface FetchVacancyAction {
  type: VacancyActionTypes.FETCH_VACANCY;
}
interface FetchVacancyActionSuccess {
  type: VacancyActionTypes.FETCH_VACANCY_SUCCESS;
  payload: Vacancy[];
}
interface FetchVacancyActionError {
  type: VacancyActionTypes.FETCH_VACANCY_ERROR;
  payload: String;
}

export type VacancyAction =
  | FetchVacancyAction
  | FetchVacancyActionSuccess
  | FetchVacancyActionError;

interface Vacancy {
  _id: String;
  user_id: Number | null;
  logo: String;
  company_name: String;
  vacancy_name: String;
  qualification: String;
  required_skills: String;
  salary: Number | String;
  town: String;
  busyness: String;
  office_remote: String;
  experience: String;
  description: String;
  conditions: String;
  contacts: String;
}
export interface VacancyState {
  vacancies: Vacancy[];
  loading: Boolean;
  error: null | String;
}

export enum ResumeActionTypes {
  FETCH_RESUME = 'FETCH_RESUME',
  FETCH_RESUME_SUCCESS = 'FETCH_RESUME_SUCCESS',
  FETCH_RESUME_ERROR = 'FETCH_RESUME_ERROR'
}

interface FetchResumeAction {
  type: ResumeActionTypes.FETCH_RESUME;
}

interface FetchResumeActionSuccess {
  type: ResumeActionTypes.FETCH_RESUME_SUCCESS;
  payload: Resume[];
}

interface FetchResumeActionError {
  type: ResumeActionTypes.FETCH_RESUME_ERROR;
  payload: string;
}

export type ResumeAction =
  | FetchResumeAction
  | FetchResumeActionSuccess
  | FetchResumeActionError;

export interface Resume {
  _id: string;
  user_id: string;
  avatar: string;
  user_name: string;
  resume_name: string;
  qualification: string;
  skills: string;
  salary: string;
  town: string;
  busyness: string;
  office_remote: string;
  experience: string;
  description: string;
  contacts: string;
  date: string;
}

export interface ResumeState {
  resume: Resume[];
  loading: boolean;
  error: null | string;
}

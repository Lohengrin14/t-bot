import { Resume } from './resume';

export enum userResumeActionTypes {
  CREATE_USER_RESUME = 'CREATE_USER_RESUME',
  DELETE_USER_RESUME = 'DELETE_USER_RESUME',
  UPDATE_USER_RESUME = 'UPDATE_USER_RESUME',
  STRING_PROPERTY_UPDATE_USER_RESUME = 'STRING_PROPERTY_UPDATE_USER_RESUME',
  ARRAY_PROPERTY_PUSH_DATA_USER_RESUME = 'ARRAY_PROPERTY_PUSH_DATA_USER_RESUME',
  ARRAY_PROPERTY_POP_DATA_USER_RESUME = 'ARRAY_PROPERTY_POP_DATA_USER_RESUME'
}

interface DeleteUserResumeAction {
  type: userResumeActionTypes.DELETE_USER_RESUME;
  payload: number;
}

interface UpdateUserResumeAction {
  type: userResumeActionTypes.UPDATE_USER_RESUME;
  payload: UserResume;
}

interface CreateUserResumeAction {
  type: userResumeActionTypes.CREATE_USER_RESUME;
  payload: UserResume;
}

interface StringPropertyUpdateUserResumeAction {
  type: userResumeActionTypes.STRING_PROPERTY_UPDATE_USER_RESUME;
  payload: {
    property: stringValueKeys;
    data: string;
  };
}

interface ArrayPropertyUserResumeAction {
  type:
    | userResumeActionTypes.ARRAY_PROPERTY_PUSH_DATA_USER_RESUME
    | userResumeActionTypes.ARRAY_PROPERTY_POP_DATA_USER_RESUME;
  payload: {
    property: stringArrayValueKeys;
    data: string;
  };
}

export interface userResumeState {
  userResume: UserResume | null;
}

export type UserResumeAction =
  | DeleteUserResumeAction
  | UpdateUserResumeAction
  | CreateUserResumeAction
  | StringPropertyUpdateUserResumeAction
  | ArrayPropertyUserResumeAction;
export type numberValueKeys = '_id';
export type stringValueKeys =
  | 'user_id'
  | 'user_name'
  | 'resume_name'
  | 'qualification'
  | 'salary'
  | 'town'
  | 'busyness'
  | 'office_remote'
  | 'description'
  | 'contacts'
  | 'specialization';

export type stringArrayValueKeys = 'skills';

export interface UserResume {
  _id: number;
  user_id: string;
  user_name: string;
  resume_name: string;
  qualification: string;
  specialization: string;
  skills: string[];
  salary: string;
  town: string;
  busyness: string;
  office_remote: string;
  description: string;
  contacts: string;
}

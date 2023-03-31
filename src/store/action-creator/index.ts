import * as UserActionCreators from './user';
import * as VacancyActionCreators from './vacancy';
import * as ResumeActionCreators from './resume';
import * as UserResumeActionCreators from './userResume';

export default {
  ...VacancyActionCreators,
  ...UserActionCreators,
  ...ResumeActionCreators,
  ...UserResumeActionCreators
};

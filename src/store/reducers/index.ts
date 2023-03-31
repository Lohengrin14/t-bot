import { combineReducers } from 'redux';
import { resumeResucer } from './resumeResucer';
import { userReducer } from './userReducer';
import { userResumeReducer } from './userResumeReducer';
import { vacancyReducer } from './vacancyReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  vacancies: vacancyReducer,
  resume: resumeResucer,
  userResume: userResumeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

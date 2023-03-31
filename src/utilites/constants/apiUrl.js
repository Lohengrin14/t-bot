export const serverUrl = 'http://localhost:7000';

const vacancyApi = `${serverUrl}/api/vacancy`;

export const vacancyApiUrl = {
  create: `${vacancyApi}/create`,
  delete: `${vacancyApi}/delete`, // query id
  getAll: `${vacancyApi}/get`,
  getOne: `${vacancyApi}/create`, // query id
  getUsersVacancy: `${vacancyApi}/user/get`, // query id
  update: `${vacancyApi}/update`
};

const resumeApi = `${serverUrl}/api/resume`;

export const resumeApiUrl = {
  create: `${resumeApi}/create`,
  delete: `${resumeApi}/delete`, // query id
  getAll: `${resumeApi}/get`,
  getOne: `${resumeApi}/create`, // query id
  getUsersVacancy: `${resumeApi}/user/get`, // query id
  update: `${resumeApi}/update`
};

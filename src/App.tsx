import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import RequireRole from './hoc/RequireRole';
import LoginPage from './pages/LoginPage/LoginPage';
import ReplyPage from './pages/ReplyPage/ReplyPage';
import ResumePage from './pages/ResumePage/ResumePage';
import SamplePage from './pages/SamplePage/SamplePage';
import UserResumePage from './pages/UserResumePage/UserResumePage';
import VacancyPage from './pages/VacancyPage/VacancyPage';
import { appPath } from './utilites/constants/appPaths';


function App() {

  return (
    < div className="App" >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path={appPath.resume.path} element={<RequireRole><ResumePage /></RequireRole>} />
          <Route path={appPath.vacancy.path} element={<RequireRole><VacancyPage /></RequireRole>} />
          <Route path={appPath.reply.path} element={<RequireRole><ReplyPage /></RequireRole>} />
          <Route path={appPath.userResume.path} element={<RequireRole><UserResumePage /></RequireRole>} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;

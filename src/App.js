import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './component/pages/Landingpage';
import StudentRegister from './component/pages/StudentRegister';
import OTP from './component/pages/OTP';
import WorkStatus from './component/pages/WorkStatus';
import UgForm from './component/pages/UgForm';
import PgForm from './component/pages/PgForm';
import SslcForm from './component/pages/SslcForm';
import HscForm from './component/pages/HscForm';
import ExplainPage from './component/pages/ExplainPage';
import PersonalServey from './component/pages/PersonalServey';
import VedioUploadPage from './component/pages/VedioUploadPage';
import EmploymentServey from './component/pages/EmploymentServey';
import ProgressBar from './component/com/ProgressBar';
import { useEffect, useState } from 'react';
import Last from './component/pages/Last (2)';
import DefaultLayout from './component/com/DefaultLayout';

function App() {
  const location = useLocation();

  const routeProgressMap = {
    '/workstatus': 0,
    '/pgdetails': 1,
    '/ugdetails': 2,
    '/hscdetails': 3,
    '/sslcdetails': 4,
    '/explain': 5,
    '/personalsurvey': 6,
    '/employmentsurvey': 7,
    '/vedioupload': 8,
  };

  const [startProgress, setStartProgress] = useState(false);

  const currentStep = routeProgressMap[location.pathname];

  useEffect(() => {
    const progressStarted = localStorage.getItem('startProgress') === 'true';
    setStartProgress(progressStarted);
  }, []);

  function handleProgress() {
    setStartProgress(true);
    localStorage.setItem('startProgress', 'true');
  }

  return (
    <div className="App">
      <DefaultLayout/>
      {startProgress && currentStep !== undefined && (
        <ProgressBar currentStep={currentStep} />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/otp" element={<OTP onNext={handleProgress} />} />
        <Route path="/lastpage" element={<Last/>} />
        <Route path="/workstatus" element={<WorkStatus />} />
        <Route path="/pgdetails" element={<PgForm />} />
        <Route path="/ugdetails" element={<UgForm />} />
        <Route path="/hscdetails" element={<HscForm />} />
        <Route path="/sslcdetails" element={<SslcForm />} />
        <Route path="/explain" element={<ExplainPage />} />
        <Route path="/personalsurvey" element={<PersonalServey />} />
        <Route path="/employmentsurvey" element={<EmploymentServey />} />
        <Route path="/vedioupload" element={<VedioUploadPage onNext={handleProgress} />} />
      </Routes>
    </div>
  );
}

export default App;
import { Navigate, Route, Routes } from 'react-router-dom';
import { Plans, Profile } from './pages';

const Settings = () => {
  return (
    <>
      <h1>Settings</h1>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='*' element={<Navigate to='/settings/profile' />} />
      </Routes>
    </>
  );
};

export default Settings;

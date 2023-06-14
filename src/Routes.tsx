import { BrowserRouter, RouterProvider, createBrowserRouter, redirect, Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import { Paper } from '@mui/material';
import { ReactNode } from 'react';
import { PUBLIC_URL } from './env';
import AuthRoute from './components/AuthRoute';
import { Login } from './pages/Login';



const Routes = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <RouterRoutes>

      <Route index element={<Navigate to='/settings' />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;

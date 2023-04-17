import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Settings from './pages/Settings/Settings';

const routes = createBrowserRouter(
  [
    {
      path: '/',
      loader: () => redirect('/settings'),
    },
    {
      path: '/settings/*',
      element: <Settings />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;

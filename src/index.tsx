import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScreenPage from './pages/ScreenPage';
import DevicePage from './pages/DevicePage';
import OverviewPage from './pages/OverviewPage';

import './styles.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <OverviewPage />,
  },
  {
    path: '/devices/:deviceKey',
    element: <DevicePage />,
  },
  {
    path: '/screens/:deviceKey/:screenKey/:language',
    element: <ScreenPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

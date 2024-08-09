import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'

import RootLayout from '../RootLayout';

import RootPage from '../../routes/RootPage';
import LoginPage from '../../routes/LoginPage';
import TrialPage from '../../routes/TrialPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/trial/:tier",
        element: <TrialPage />,
      }
    ]
  },
]);

export default function RooterProvider() {
  return <Provider router={router} />
}

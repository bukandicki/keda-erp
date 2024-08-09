import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import RootLayout from '../RootLayout';

const RootPage = lazy(() => import('../../routes/RootPage'))
const LoginPage = lazy(() => import('../../routes/LoginPage'))
const TrialPage = lazy(() => import('../../routes/TrialPage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <>
          <Suspense>
            <RootPage />,
          </Suspense>
        </>
      },
      {
        path: "/login",
        element: <>
          <Suspense>
            <LoginPage />,
          </Suspense>
        </>
      },
      {
        path: "/trial/:tier",
        element: <>
          <Suspense>
            <TrialPage />,
          </Suspense>
        </>
      }
    ]
  },
]);

export default function RooterProvider() {
  return <Provider router={router} />
}

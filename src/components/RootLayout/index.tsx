import { Outlet } from "react-router-dom";
import { lazy } from 'react';

const Header = lazy(() => import("../../components/Header"))
const Footer = lazy(() => import("../../components/Footer"))

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactLenis from 'lenis/react'

import Header from "./components/Header"
import Footer from "./components/Footer"
import RouterProvider from "./components/RouterProvider"

import "./index.styles.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root>
      <Header />
      <RouterProvider />
      <Footer />
    </ReactLenis>
  </StrictMode>,
)

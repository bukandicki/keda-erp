
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactLenis from 'lenis/react'

import RouterProvider from "./components/RouterProvider"

import "./index.styles.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider />
    </ReactLenis>
  </StrictMode>,
)

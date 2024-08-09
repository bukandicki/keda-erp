
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactLenis from 'lenis/react'

import RouterProvider from "./components/RouterProvider"

import "./index.styles.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={{
      easing: x => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
      lerp: .085
    }}>
      <RouterProvider />
    </ReactLenis>
  </StrictMode>,
)

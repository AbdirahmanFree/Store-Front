import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import About from './pages/about/About.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: 'about',
    element: <About/>
  }

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

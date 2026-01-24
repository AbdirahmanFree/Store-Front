import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import About from './pages/about/About.jsx'
import Cart from './pages/cart/Cart.jsx'
import { useState } from 'react'




const route = [{
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'cart',
    element: <Cart />
  }
]

export default route
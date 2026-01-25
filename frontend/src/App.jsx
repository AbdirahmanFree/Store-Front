import route from "./routes"
import { useState } from "react"
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Cart from "./pages/cart/Cart"



function App(){
    const [cart, setCart] = useState({})

    return (
    <>
        <RouterProvider router={createBrowserRouter([{
            
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
        ])}/>


    </>
    )
}

export default App
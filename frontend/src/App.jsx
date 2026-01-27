import { useEffect, useState } from "react"
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Cart from "./pages/cart/Cart"



function App(){
    const [cart, setCart] = useState({})
    const [items, setItems] = useState([])
        useEffect(() => {
           fetch('https://fakestoreapi.com/products').
           then((res) => res.json()).then((json) => 
            setItems(json)
        )
        },[])

    return (
    <>
        <RouterProvider router={createBrowserRouter([{
            
            path: "/",
            element: <Home />,
          },
          {
            path: "shop",
            element: <Shop items={items} cart={cart} setCart={setCart} />
          },
          {
            path: 'about',
            element: <About/>
          },
          {
            path: 'cart',
            element: <Cart items={items} cart={cart} setCart={setCart} />
          }
        ])}/>


    </>
    )
}

export default App
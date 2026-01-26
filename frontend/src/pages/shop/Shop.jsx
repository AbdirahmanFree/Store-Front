import Navbar from "../../components/navbar/Navbar"
import classes from "./Shop.module.css"
import Card from "../../components/card/Card"
import { useEffect, useState } from "react"
function Shop({cart, setCart}){
    const [items, setItems] = useState([])
    useEffect(() => {
       fetch('https://fakestoreapi.com/products').
       then((res) => res.json()).then((json) => 
        setItems(json)
    )
    },[])
    
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            <div className={`${classes.cardContainer}`}>
                {items.map(item => {
                    return(
                        <Card title={item.title} price={item.price} image={item.image} id={item.id} cart={cart} setCart={setCart}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop
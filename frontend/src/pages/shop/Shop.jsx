import Navbar from "../../components/navbar/Navbar"
import classes from "./Shop.module.css"
import Card from "../../components/card/Card"
import { useEffect, useState } from "react"
function Shop({items, cart, setCart}){

    
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            <div className={`${classes.cardContainer}`}>
                {items.map(item => {
                    return(
                        <Card key={item.id} title={item.title} price={item.price} image={item.image} id={item.id} cart={cart} setCart={setCart}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop
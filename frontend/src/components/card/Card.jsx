import Cart from "../../pages/cart/Cart"
import classes from "./card.module.css"
import CartBtn from "./cart/CartBtn"

function Card({title, price, image, id, cart, setCart}){
    return (
    <div className={`${classes.container}`}>
        <div className={`${classes.innerContainer}`}>
            <img className={`${classes.image}`} src={image}/>
            <span>{title}</span>
            <h3>${price}</h3>
            </div>
        <CartBtn id={id} cart={cart} setCart={setCart}/>

    </div>
    )
}

export default Card
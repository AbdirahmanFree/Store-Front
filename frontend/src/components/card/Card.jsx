import Cart from "../../pages/cart/Cart"
import classes from "./card.module.css"
import CartBtn from "./cart/CartBtn"

function Card({title, price, image}){
    return (
    <div className={`${classes.container}`}>
        <div className={`${classes.innerContainer}`}>
            <img className={`${classes.image}`} src={image}/>
            <span>{title}</span>
            <h3>${price}</h3>
            </div>
        <CartBtn/>

    </div>
    )
}

export default Card
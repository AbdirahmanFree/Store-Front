import Navbar from "../../components/navbar/Navbar"
import classes from "./Cart.module.css"
function Cart({cart, setCart}){
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            <h1>Cart</h1>
        </div>
        
    )
}
export default Cart
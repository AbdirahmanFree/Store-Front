import Navbar from "../../components/navbar/Navbar"
import classes from "./Cart.module.css"
function Cart({cart, setCart}){
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            {Object.keys(cart).length == 0 || !cart ? (
                <div className={`${classes.emptyContainer}`}>
                    <h1>No Items in Cart</h1>
                </div>
            ): (
                <div className={`${classes.cartContainer}`}>
                    
                </div>
            )}
        </div>
        
    )
}
export default Cart
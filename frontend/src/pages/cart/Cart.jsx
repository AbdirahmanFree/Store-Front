import Navbar from "../../components/navbar/Navbar"
import classes from "./Cart.module.css"
import CartBtn from "../../components/card/cart/CartBtn"
function Cart({items, cart, setCart}){
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            {Object.keys(cart).length == 0 || !cart ? (
                <div className={`${classes.emptyContainer}`}>
                    <h1>No Items in Cart</h1>
                </div>
            ): (
                <div className={`${classes.cartContainer}`}>
                    {
                        items.map((item,acc) => 
                            cart[item.id] ? (<div className={`${classes.itemContainer}`}>
                                <div>
                                    <img src={item.image} className={`${classes.image}`}/>
                                    <div>
                                        <span>{item.title}</span>
                                        <span>{item.price}</span>
                                    </div>
                                </div>

                                <div>
                                    <CartBtn id={item.id} cart={cart} setCart={setCart} />
                                    <span>{item.price * cart[item.id]}</span>
                                </div>

                                
                                
                            </div>) : (<></>),0
                        )
                    }
                </div>
            )}
        </div>
        
    )
}
export default Cart
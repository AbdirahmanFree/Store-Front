import Navbar from "../../components/navbar/Navbar"
import classes from "./Cart.module.css"
import CartBtn from "../../components/card/cart/CartBtn"
function Cart({items, cart, setCart}){

    const total = items.reduce((total,item) => {
        return cart[item.id] ? total + (item.price *cart[item.id]) : total
    },0)
  


  

    
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            {!cart || Object.keys(cart).length == 0 ? (
                <div className={`${classes.emptyContainer}`}>
                    <h1>No Items in Cart</h1>
                </div>
            ): (
                
                <div className={`${classes.cartContainer}`}>
                    {
                        items.map((item, total) => 
                            cart[item.id] ? (<div key={item.id} className={`${classes.itemContainer}`}>
                                <div className={`${classes.descBlock}`}>
                                    <img src={item.image} className={`${classes.image}`}/>
                                    <div className={`${classes.textBlock}`}>
                                        <span className={`${classes.itemTitle}`}>{item.title}</span>
                                        <span>{item.price}</span>
                                    </div>
                                </div>

                                <div className={`${classes.priceBlock}`}>
                                    <CartBtn id={item.id} cart={cart} setCart={setCart} />
                                    <span>{item.price * cart[item.id]}</span>
                                </div>
                                
                            </div>) : (<></>)
                        )
                        
                    }
                    <h1 >Total:{total} </h1>
                </div>
                
            )}
        </div>
        
    )
}
export default Cart
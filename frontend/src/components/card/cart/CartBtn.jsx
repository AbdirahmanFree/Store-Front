import classes from "./CartBtn.module.css"
function CartBtn({id, cart, setCart}){
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.minus}`}>−</div>
            <div className={`${classes.display}`}>{cart.id || 0}</div>
            <div className={`${classes.plus}`}>+</div>


        </div>
    )
}

export default CartBtn
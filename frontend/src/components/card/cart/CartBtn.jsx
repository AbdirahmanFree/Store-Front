import classes from "./CartBtn.module.css"
function CartBtn({id, cart, setCart}){
    function addToCart(id){
        if(cart.includes(id)){
            setCart(cart => ({...cart,
                id: 1
            }))
        }
        else{
            setCart(cart => ({...cart,
                id: cart.id+1
            }))
        }
    }

    function removeFromCart(id){
        if(cart.includes(id)){
            setCart(cart => ({...cart,
                id: cart.id+1
            }))
        }
    }
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.minus}`} onClick={() => removeFromCart(id)}>−</div>
            <div className={`${classes.display}`}>{cart.id || 0}</div>
            <div className={`${classes.plus}`} onClick={() => addToCart(id)}>+</div>


        </div>
    )
}

export default CartBtn
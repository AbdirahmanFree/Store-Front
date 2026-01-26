import classes from "./CartBtn.module.css"
function CartBtn({id, cart, setCart}){

    function addToCart(id) {
        setCart(cart => ({
            ...cart,
            [id]: cart[id] ? cart[id] + 1 : 1
        }))
        console.log(cart)
    }

    function removeFromCart(id){

        if(cart[id] == 1 && cart[id]==0){
            setCart(cart => ({
            ...cart,
            }))

        }
        else{
            setCart(cart => ({
                ...cart,
                [id]:  cart[id]-1
            }))
        }
        

    }


    
    return (
        <>
            {cart[id] == 0 || !cart[id] ? (
                <div className={`${classes.container} ${classes.add}`}>
                    <div className={`${classes.addToCart}`} onClick={()=> addToCart(id)}>Add To Cart</div>
                </div>) : (
                    <div className={`${classes.container}`}>
            
                <div className={`${classes.minus}`} onClick={() => removeFromCart(id)}>−</div>
                <div className={`${classes.display}`}>{cart[id] || 0}</div>
                <div className={`${classes.plus}`} onClick={() => addToCart(id)}>+</div>


                </div>
            )}
        </>
        
    )
}

export default CartBtn
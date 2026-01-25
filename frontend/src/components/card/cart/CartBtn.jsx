import classes from "./CartBtn.module.css"
function CartBtn({count, setCount}){
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.minus}`}>−</div>
            <div className={`${classes.display}`}></div>
            <div className={`${classes.plus}`}>+</div>

        </div>
    )
}

export default CartBtn
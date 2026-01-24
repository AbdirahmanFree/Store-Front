import classes from "./CartBtn.module.css"
function CartBtn({count}){
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.plus}`}>+</div>
            <div className={`${classes.display}`}></div>
            <div className={`${classes.minus}`}>-</div>

        </div>
    )
}
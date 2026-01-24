import classes from "./card.module.css"

function Card({title, price, image}){
    return (
    <div className={`${classes.container}`}>
        <img className={`${classes.image}`} src={image}/>
        <span>{title}</span>
        <h3>${price}</h3>
        
    </div>
    )
}

export default Card
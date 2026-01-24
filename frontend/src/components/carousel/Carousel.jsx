import { useEffect, useState } from "react"
import classes from "./Carousel.module.css"
function Carousel(){
    const [items, setItems] = useState([]);
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false)

    function handleNext(){
        setIsAnimating(true)
        setTimeout(() => {
            setIndex(index => (index+1) %4)
            setIsAnimating(false)
        },300)
    }
    


    useEffect(() => {
       fetch('https://fakestoreapi.com/products').
       then((res) => res.json()).then((json) => 
        setItems(json.slice(0,4))
    )
    },[])
    return (
        <div className={`${classes.carouselContainer}`}>
            <h1>Featured Items</h1>
            
                {items.length >0 ? (
                   <div className={`${classes.itemContainer} ${isAnimating ? classes.slideOut : classes.slideIn}`}>
                        <div className={`${classes.itemTextContainer}`}>
    
                            <h4>{items[index].title}</h4>
                            <p>{items[index].description}</p>
                        </div>
                        <img src={items[index].image} className={`${classes.itemImage}`}/>
                        <div onClick={handleNext} className={`${classes.next}`}>➔</div>
                   </div>
                ): (
                    <></>
                ) }
            
            
        </div>
    )
}
export default Carousel
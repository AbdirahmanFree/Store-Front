import Navbar from "../../components/navbar/Navbar"
import classes from './About.module.css'
function About(){
    return (
        <div className={`${classes.container}`}>
            <Navbar />
            <div className={`${classes.textContainer}`}>
                <h1>About us</h1>
                <span>
                    What started as a simple idea between friends grew into something much bigger than we ever imagined.

We founded this store out of a shared frustration: finding reliable gear for adventure, travel, and everyday exploration was either too expensive, poorly made, or unnecessarily complicated. Whether we were planning weekend hikes, road trips, late-night photography sessions, or just trying to find electronics we could actually trust, the experience was always the same—too many choices, not enough quality, and very little transparency.

So we decided to build the kind of store we wished existed.

In the early days, this meant long nights researching products, testing gear ourselves, and obsessing over details most people overlook. We learned quickly that “adventure” doesn’t only mean climbing mountains or traveling off the grid—it’s also about curiosity, creativity, and pushing beyond routine. For some, that’s outdoor exploration. For others, it’s building, creating, or simply being prepared for whatever the day brings.

Our goal became clear: create a single destination that brings together dependable adventure gear, thoughtfully designed apparel, and practical electronics—products that earn their place in your life, not just your cart.

We believe good gear should empower you, not distract you. That’s why we focus on durability, functionality, and timeless design. Every product we carry is chosen with intention, balancing performance with value, so you can focus on the experience rather than worrying about your equipment.

As we’ve grown, our mission has stayed the same: support exploration in all its forms. From spontaneous trips to carefully planned journeys, from first-time adventurers to seasoned explorers, we’re here to help you go further—confidently and prepared.

This isn’t just a store. It’s a reflection of the mindset we live by: stay curious, stay ready, and never stop exploring.
                </span>
            </div>
        </div>
    )
}
export default About
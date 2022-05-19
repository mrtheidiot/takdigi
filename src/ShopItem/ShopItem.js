import React from "react";
import classes from './ShopItem.module.css';
import ShopGallery from "./ShopGallery/ShopGallery";

import j1 from './../assets/joker/j1.jpg'
import j2 from './../assets/joker/j2.jpg'
import j3 from './../assets/joker/j3.jpg'

const shopGallery = [
    {image: `${j1}`, alt: "alt"},
    {image: `${j2}`, alt: "alt"},
    {image: `${j3}`, alt: "alt"}
]

const ShopItem = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.mainarea}>
                <div className={classes.gallery}>
                     <ShopGallery imageList={shopGallery} />
                </div>
                <div className={classes.description}>
                    Tutaj bedize opis 
                </div>
            </div>


        </div>
    )
}

export default ShopItem
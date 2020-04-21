import React from "react";
import Banner1 from "../imgs/1.jpg"
import Banner2 from "../imgs/2.jpg"
import Banner3 from "../imgs/3.jpg"

import Carousel from "./Carousel.js"

import "./banner.css"

function Banner() {
    return(
        <div id="Banner">

            <Carousel
                dots={true} /* 如果传false，则不显示指示点 */
                delay={3000}/* 如果不传，默认为4000 */
                afterChange={(currentIndex)=>{

                }}>
                <img src={Banner1} width="100%"/>
                <img src={Banner2} width="100%"/>
                <img src={Banner3} width="100%"/>
            </Carousel>
        </div>
    )

}

export default Banner;
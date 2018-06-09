import React, {Component} from 'react'

const Carousel = () => {
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="mf-carousel-item carousel-item active">
                    <img className="mf-carousel-img d-block w-100" src="/img/product-line-1.png" alt="First slide"/>
                </div>
                <div className="mf-carousel-item carousel-item">
                    <img className="mf-carousel-img d-block w-100" src="/img/product-line-2.png" alt="Second slide"/>
                </div>
                <div className="mf-carousel-item carousel-item">
                    <img className="mf-carousel-img d-block w-100" src="/img/product-line-3.png" alt="Third slide"/>
                </div>
            </div>
        </div>
    )
}

export {Carousel}
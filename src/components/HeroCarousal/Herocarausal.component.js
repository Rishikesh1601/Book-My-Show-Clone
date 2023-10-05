import React from "react";
import HeroSlider from "react-slick";

//import arrow components
// import { PrevArrow,NextArrow } from "./arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarausal = () => {
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "150px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />
    };
    const images = ["https://rukminim1.flixcart.com/image/850/1000/k77xx8w0/poster/c/g/t/medium-the-shawshank-redemption-movie-poster-for-room-with-gloss-original-imafphnwmxjkvfjf.jpeg?q=20",
    "https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-2_orig.jpg",
    "https://cdn.wallpapersafari.com/76/85/fFsbXB.jpg",
    "https://www.tallengestore.com/cdn/shop/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_745d5009-8298-4bf9-9efa-fd77fd18131a.jpg?v=1577693343",
    "https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg",
    "https://www.tallengestore.com/cdn/shop/products/Movie_Poster_Art_-_Deadpool_-_Sweet_-_Tallenge_Hollywood_Poster_Collection_0a7be87c-ba79-4532-8db4-fc5ef177a4b1.jpg?v=1578045040"];
    return (
        <>
        <div className="bg-gray-100">
        <HeroSlider {...settings}>
            {images.map((image)=>(
                <div className="w-20 h-96 px-2 py-3">
                    <img src={image} alt="test-i" className="w-full h-full rounded-md" />
                </div>
            ))}
        </HeroSlider>
        </div>
        </>
    );
};

export default HeroCarausal;

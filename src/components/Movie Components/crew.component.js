import React from "react";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "../HeroCarousal/arrows.component";
//import movie posters
import MoviePoster from "./movie.poster";

const Crew = () => {
    const setting = {
        Infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : false,
        InitialSlide : 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }


    const CastImages = [
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/atlee-37797-1689670023.jpg",
            alt: "Image",
            title: "Atlee",
            subtitle: "Director",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gauri-khan-iein021799-24-03-2017-18-02-23.jpg",
            alt: "Image",
            title: "Gauri Khan",
            subtitle: "Producer",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/red-chillies-entertainment-1075747-24-03-2017-13-42-09.jpg",
            alt: "Image",
            title: "Red Chillies Entertainment",
            subtitle: "Producer",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mr-gaurav-verma-1086558-05-10-2017-04-50-03.jpg",
            alt: "Image",
            title: "Gaurav Verma",
            subtitle: "Co-Producer",
        }
    ];

    return (
        <>
        <div className="w-5/6">
        <div className="flex items-start gap-1 py-4 px-4">
            <h3 className="text-gray-800 text-xl font-bold">Crew</h3>
        </div>
        <div className="shrink w-4/5 text-left">
        <Slider {...setting}>
            {CastImages.map((image)=>(
                <MoviePoster {...image}/>
            ))}
        </Slider>
        </div>
        </div>
        </>
    )
}

export default Crew;
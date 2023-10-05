import React from "react";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "../HeroCarousal/arrows.component";
//import movie posters
import MoviePoster from "./movie.poster";

const Cast = () => {
    const setting = {
        Infinite: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay : false,
        InitialSlide : 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }


    const CastImages = [
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
            alt: "Image",
            title: "Shah Rukh Khan",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nayanthara-5143-1675058766.jpg",
            alt: "Image",
            title: "Nayantara",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-sethupathi-32355-16-09-2017-03-30-38.jpg",
            alt: "Image",
            title: "Vijay Sethupathi",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sanya-malhotra-1057788-19-09-2018-12-19-26.jpg",
            alt: "Image",
            title: "Sanya Malhotra",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priyamani-1738-1654347025.jpg",
            alt: "Image",
            title: "Priyamani",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg",
            alt: "Image",
            title: "Deepika Padukon",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sunil-grover-1055699-24-03-2017-13-54-24.jpg",
            alt: "Image",
            title: "Sunil Grover",
            subtitle: "Actor",
        },
        {
            src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/lehar-khan-30883-24-03-2017-16-02-17.jpg",
            alt: "Image",
            title: "Lehar Khan",
            subtitle: "Actor",
        }
        
    ];

    return (
        <>
        <div className="w-5/6">
        <div className="flex items-start gap-1 py-4 px-4">
            <h3 className="text-gray-800 text-xl font-bold">Cast</h3>
        </div>
        <Slider {...setting}>
            {CastImages.map((image)=>(
                <MoviePoster {...image}/>
            ))}
        </Slider>
        </div>
        </>
    )
}

export default Cast;
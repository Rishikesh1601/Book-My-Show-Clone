import React from "react";
import Slider from "react-slick";
//import the poster
import Poster from "../poster/poster.component";

const RecommendedMovies = () => {
    const setting = {
        Infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : false,
        InitialSlide : 0
    }
    const recommendedImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICAyNy43SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350845-nxeptllcsg-portrait.jpg",
            alt: "Image",
            title: "Fukrey 3",
            subtitle: "Comedy",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA1NTIuNEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330424-mccryrbvyf-portrait.jpg",
            alt: "Image",
            title: "Jawan",
            subtitle: "Action/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgNDUuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00344388-jljkxajfam-portrait.jpg",
            alt: "Image",
            title: "The vaccine war",
            subtitle: "Drama"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360287-skjcdagtlb-portrait.jpg",
            alt: "Image",
            title: "The Creator",
            subtitle: "Sci-Fi/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS40LzEwICAyNC43SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341436-msmyjsjspw-portrait.jpg",
            alt: "Image",
            title: "Chandramukhi 3",
            subtitle: "Horror"
        }
    ]
    return(
        <>
            <Slider {...setting}>
            {recommendedImages.map((image)=>(
                <Poster {...image}/>
            ))}
        </Slider>
        </>
    )
}

export default RecommendedMovies;



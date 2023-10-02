import React from "react";
import Slider from "react-slick";

//import posters
import Poster from "../poster/poster.component";

const Premiere = () => {
    const setting = {
        Infinity: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : false,
        InitialSlide : 0
    }


    const premiereImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370703-qysrudqlnh-portrait.jpg",
            alt: "Image",
            title: "Scooby-Doo and Krypto Too",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00331565-bhqnbdsyuc-portrait.jpg",
            alt: "Image",
            title: "Blue Beetle",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370418-fdqganmunb-portrait.jpg",
            alt: "Image",
            title: "King Lear",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370693-ekjtjrrtzy-portrait.jpg",
            alt: "Image",
            title: "Mending The Line",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370924-xqxefxwuvt-portrait.jpg",
            alt: "Image",
            title: "Happy Valley Series 3",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370688-nsmtlvagey-portrait.jpg",
            alt: "Image",
            title: "The Machine",
            subtitle: "English",
            isDark: false
        }
        
    ];

    return (
        <>
        <Slider {...setting}>
            {premiereImages.map((image)=>(
                <Poster {...image}/>
            ))}
        </Slider>
        </>
    )
}

export default Premiere;
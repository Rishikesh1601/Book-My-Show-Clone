import React from "react";
import Slider from "react-slick";

//import posters
import Poster from "../poster/poster.component";

const Premiere = () => {
    const setting = {
        Infinite: false,
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
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00331565-bhqnbdsyuc-portrait.jpg",
            alt: "Image",
            title: "Blue Beetle",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370418-fdqganmunb-portrait.jpg",
            alt: "Image",
            title: "King Lear",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370693-ekjtjrrtzy-portrait.jpg",
            alt: "Image",
            title: "Mending The Line",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370924-xqxefxwuvt-portrait.jpg",
            alt: "Image",
            title: "Happy Valley Series 3",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370688-nsmtlvagey-portrait.jpg",
            alt: "Image",
            title: "The Machine",
            subtitle: "English",
        }
        
    ];

    return (
        <>
        <div className="flex flex-col items-start gap-1 py-4 px-4">
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-white text-sm">Brand new releases every Friday</p>
        </div>
        <Slider {...setting}>
            {premiereImages.map((image)=>(
                <Poster {...image} isDark/>
            ))}
        </Slider>
        </>
    )
}

export default Premiere;
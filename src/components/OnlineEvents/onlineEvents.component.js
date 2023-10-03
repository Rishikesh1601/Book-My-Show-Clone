import React from "react";
import Slider from "react-slick";

//import poster
import Poster from "../poster/poster.component";

const OnlineEvents = () => {
    const setting = {
        Infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : false,
        InitialSlide : 0
    }
    const OnlineEventImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362656-rqqaztpwaw-portrait.jpg",
            alt: "Image",
            title: "Talk Session in Business (Ft.Andreas Kalpan)",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365282-pvzbcytwpv-portrait.jpg",
            alt: "Image",
            title: "Kids Rapis Chess Championship",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362658-dbwagtvhxu-portrait.jpg",
            alt: "Image",
            title: "Talk Session in Design (Ft.Markus Berger)",
            subtitle: "Watch on Zoom",
        },

        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317753-wxxwpanevl-portrait.jpg",
            alt: "Image",
            title: "arn Digital Marketting and Adobe Photoshop",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362648-yqwsgpbebl-portrait.jpg",
            alt: "Image",
            title: "Talk Session in Med-Science (Ft.Julia Schaletzky)",
            subtitle: "Watch on Zoom",
        },
    ]
    return(
        <>
            <Slider {...setting}>
                {OnlineEventImages.map((image)=>(
                    <Poster {...image}/>
                ))}
            </Slider>
        </>
    )
}

export default OnlineEvents;
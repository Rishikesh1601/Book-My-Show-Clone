import React from "react";

const Poster = (props) => {

    return (
        <>
        <div className="h-full px-4 cursor-pointer">
            <div>
                <img src={props.src} alt="premiereImage" className="w-full h-full rounded-md"/>
            </div>

            <h3 className={`text-18 font-bold ${
                props.isDark ? "text-white" : "text-gray-800"
            }`}>
                {props.title}
            </h3>

            <p className={`text-sm ${
                props.isDark ? "text-white" : "text-gray-500"
            }`}>
                {props.subtitle}
            </p>
        </div>
        </>
    )
}


export default Poster;
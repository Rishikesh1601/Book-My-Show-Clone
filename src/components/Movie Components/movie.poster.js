import React from "react";

const MoviePoster = (props) => {
    return (
        <>
        <div className="h-full px-2 cursor-pointer">
            <div>
                <img src={props.src} alt="premiereImage" className="w-32 h-full rounded-full"/>
            </div>

            <h3 className={`text-18 font-bold  ${
                props.isDark ? "text-white" : "text-gray-800"
            }`}>
                {props.title}
            </h3>

            <p className={`text-sm pl-12 ${
                props.isDark ? "text-white" : "text-gray-500"
            }`}>
                {props.subtitle}
            </p>
        </div>
        </>
    )
}


export default MoviePoster;
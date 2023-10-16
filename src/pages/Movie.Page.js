
import React from "react";
// import {BsFillStarFill} from "react-icons/bs";
import MovieTitle from "../components/Movie Components/title.component";
import Cast from "../components/Movie Components/cast.component";
import Crew from "../components/Movie Components/crew.component";


const Movie = () => {
    return (
        <>
        <div className="bg-gray-50">
            <div>
                <MovieTitle />
            </div>
            <div className="flex flex-col conatiner mx-auto px-16">
                <br></br>
                <h1 className="text-xl text-black font-bold pb-4 font-sans">About the movie</h1>
                <p className="text-sm text-gray-800 font-sans">A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.</p>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
            <div className="conatiner mx-auto px-12">
                <br></br>
                <Cast/>
                <br></br>
                <hr></hr>
            </div>
            <div className="conatiner mx-auto px-12">
                <br></br>
                <Crew/>
                <br></br>
                <hr></hr>
            </div>
        </div>
        
        </>
    )
} 

export default Movie;
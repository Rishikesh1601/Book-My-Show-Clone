import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premiere from "../components/premiere/premiere.component";
import RecommendedMovies from "../components/Recomended Movies/recomendedmovies.component";
import OnlineEvents from "../components/OnlineEvents/onlineEvents.component";

const HomePage = () =>{
    return (
        <>
        <div className="flex flex-col gap-9 bg-gray-50">
            <div className="container mx-auto px-12">
                <h1 className="text-2xl font-bold text-gray-700 my-3 mx-4">Recommended Movies</h1>
                <RecommendedMovies />
            </div>
            <div className="container mx-auto px-32 pt-10 pb-7">
                <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
                className="w-full h-full"
                alt="img"
                />
            </div>
            <div className="container mx-auto px-12 pb-5">
                <h1 className="text-2xl font-bold text-gray-700 my-3 mx-2">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-bms-700 py-12">
                <div  className="container mx-auto px-32">
                    <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                    alt="img"
                    className="w-full h-full"
                    />
                </div>
                <div className="container mx-auto px-32">
                    <Premiere />
                </div>
            </div>
            <div className="container mx-auto px-12">
                <h1 className="text-2xl font-bold text-gray-700 my-3 mx-4">Online Streaming Events</h1>
                <OnlineEvents/>
            </div>
        </div>
        </>
    )
}


export default HomePage;


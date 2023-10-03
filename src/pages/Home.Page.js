import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premiere from "../components/premiere/premiere.component";

const HomePage = () =>{
    return (
        <>
        <div className="flex flex-col gap-9">
            <div className="container mx-auto px-12">
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
        </div>
        </>
    )
}


export default HomePage;


import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premiere from "../components/premiere/premiere.component";

const HomePage = () =>{
    return (
        <>
        <div className="container mx-auto px-12">
            <h1 className="text-2xl font-bold text-gray-700 my-3 mx-2">The Best Of Entertainment</h1>
            <EntertainmentCardSlider />
            <Premiere />
        </div>
        </>
    )
}


export default HomePage;


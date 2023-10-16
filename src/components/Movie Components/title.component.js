import React from "react";
import {BsFillStarFill} from "react-icons/bs";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_GDng7vrQm7KNlf",
        amount: 10000,
        currency: "INR",
        name: "BMS Clone",
        description: "Movie Purchase",
        image: "https://in.bmscdn.com/webin/common/icons/logo.svg",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options)
    rzp.open();
}

const MovieTitle = () => {
    return (
        <>
        <div className="h-96 flex bg-[url('https://pbs.twimg.com/ext_tw_video_thumb/1679078988096892929/pu/img/ekA98ZwGUGXnrTVY.jpg:large')] bg-cover bg-center w-full">
            <div className="grid justify-items-start px-16 py-8 flex flex-col">
                <img
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
                alt="movie_title"
                className="h-80 z-10 rounded-t-lg"
                />
                <h1 className="text-white text-sm bg-black w-full text-center rounded-b-lg ">In Cinemas</h1>
            </div>
            <div className="flex flex-col py-12">
                <div>
                    <h1 className="text-5xl font-bold font-sans text-white">Jawan</h1>
                </div>
                <div>
                    <div className="flex flex-row py-8">
                        <BsFillStarFill className="h-8"/>
                        <h1 className="px-3 text-white font-bold text-2xl">8.4/10</h1>
                        <h3 className="text-lg text-white py-1">557.4K Votes</h3>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row bg-gray-700 space-x-4 rounded-md px-6 py-4">
                        <div className="flex flex-col">
                            <h1 className="text-white font-bold text-lg">
                                Add your rating & review
                            </h1>
                            <h3 className="text-white text-sm">
                                Your Ratings Matter
                            </h3>
                        </div>   
                        <button className="bg-white text-sm px-3 mt-2 h-8 text-black rounded-md font-bold">Rate Now</button> 
                    </div>
                    
                </div>
                <div>
                    <h1 className="text-sm text-white py-4 font-bold">2h 49m • Action,Thriller • UA • 7 Sep, 2023</h1>
                </div>
                <div>
                    <button onClick={launchRazorPay} className="bg-red-500 text-white font-bold text-sm rounded-md px-12 py-2">Book tickets</button>
                </div>
            </div>
        </div>

        </>
    )
} 

export default MovieTitle;
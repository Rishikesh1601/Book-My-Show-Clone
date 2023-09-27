import React from "react";
//components
import Navbar  from "../components/Navbar/navbar.component.js";
import HeroCarausal from "../components/HeroCarousal/Herocarausal.component.js";
const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar />
            <HeroCarausal />
            {props.children}
        </div>
    );
};

export default DefaultLayout;
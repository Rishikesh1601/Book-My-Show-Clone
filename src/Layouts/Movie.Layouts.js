import React from "react";
//components
import MovieNavbar from "../components/Navbar/Movie.navbar.component";

const MovieLayout = (props) => {
    return (
        <div>
            <MovieNavbar />
            {props.children}
        </div>
    );
};

export default MovieLayout;
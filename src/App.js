// import { Route } from "react-router-dom";

//import hoc
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

import HomePage from "./pages/Home.Page";
import Movie from "./pages/Movie.Page";

function App() {
  return (
    <>
    <div className="bg-gray-50">
    <DefaultHOC path="/" exact component={HomePage}/>
    <MovieHOC path="/movie/:id" exact component={Movie}/>
    </div>
    </>
  );
}

export default App;

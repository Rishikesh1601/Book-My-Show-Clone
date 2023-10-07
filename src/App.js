import { Route } from "react-router-dom";
import axios from "axios";

//import hoc
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//import pages
import HomePage from "./pages/Home.Page";
import Movie from "./pages/Movie.Page";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

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

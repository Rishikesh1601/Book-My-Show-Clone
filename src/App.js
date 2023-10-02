import { Route } from "react-router-dom";

//import hoc
import DefaultHOC from "./HOC/Default.HOC";

//import components
// import Temp from "./components/temp";
// import Navbar from "./components/Navbar/navbar.component";
import HomePage from "./pages/Home.Page";

function App() {
  return (
    <>
    <div className="bg-gray-50">
    <DefaultHOC path="/" exact component={HomePage}/>
    </div>
    </>
  );
}

export default App;

import { Route } from "react-router-dom";

//import hoc
import DefaultHOC from "./HOC/Default.HOC";

//import components
import Temp from "./components/temp";
import Navbar from "./components/Navbar/navbar.component";

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;

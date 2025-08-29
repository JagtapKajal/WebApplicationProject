import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";

function App() {
  return (
    <>
      <div className="container mt-4">
        <Router>
           <Navbar />
           <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path ="/AddUser" element = {<AddUser/>} />
           </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;

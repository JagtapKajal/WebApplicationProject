import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes,  } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <div className="container mt-4">
      </div>
    </>
  );
}
export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar.jsx";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import "../assets/css/style.css";

import Home from "./Home";
import LAgence from "./LAgence";
import Contact from "./Contact";
import Translate from "./Translate";
import Error404 from "./Error404";


const Main = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LAgence" element={<LAgence />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/404" element={<Error404/>}/>
          {/* <Route path="/trans" element={<Translate/>}/> */}

        </Routes>
     
    </>
  );
};

export default Main;

import { Routes, Route } from "react-router-dom";

import "../../assets/css/style.css";

import Home from "../../components/Home";
import LAgence from "../../components/LAgence";
import Contact from "../../components/Contact";
// import Translate from "./Translate";
import Error404 from "../../components/Error404";


import { LegalDigitaly } from "../../pages";



const Main = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LAgence" element={<LAgence />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/404" element={<Error404/>}/>
          {/* <Route path="/trans" element={<Translate/>}/> */}

        <Route path="/Legal" element={<LegalDigitaly/>}></Route>

        </Routes>
     
    </>
  );
};

export default Main;

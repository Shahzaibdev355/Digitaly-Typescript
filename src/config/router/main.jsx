import { Routes, Route } from "react-router-dom";

// import '@mui/material/styles'; 
// Place this import at the top

import "../../assets/css/style.css";


import Home from "../../components/Home";
import LAgence from "../../components/LAgence";
import Contact from "../../components/Contact";
// import Translate from "./Translate";
import Error404 from "../../components/Error404";


import { LegalDigitaly, Support } from "../../pages";

// import Support from "../../pages/Support/Support";



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

        <Route path="/support" element={<Support/>} /> 



        </Routes>
     
    </>
  );
};

export default Main;

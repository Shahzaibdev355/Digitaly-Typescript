import { Routes, Route } from "react-router-dom";

import "../assets/css/style.css";

import Home from "./Home";
import LAgence from "./LAgence";
import Contact from "./Contact";
import Error404 from "./Error404";



import Support from "./Support";
import Test from "./Test";




const Main = () => {
  return (
    <>
    
        <Routes>


          {/* <Route path="/" element={<Support/>} /> */}



          {/* <Route path="/LAgence" element={<LAgence />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/404" element={<Error404/>}/> */}




          {/* <Route path="*" element={<div>404 - Not Found</div>} />

          <Route path="/support" element={<Support/>} /> 

          <Route path="/test" element={<Test/>}/>

          <Route path="/testing" element={<div>Test Page</div>} /> */}

        </Routes>
     
    </>
  );
};

export default Main;

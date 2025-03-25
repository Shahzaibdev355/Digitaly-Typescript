

import React from "react";

import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "./components/i18n"; // Import your i18n configuration

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./config/router/main";
import { LanguageProvider } from "./components/LanguageContext";

function App() {

 

  return (

    
    <>

     


      <LanguageProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>

        
      </LanguageProvider>

   
    </>
  );
}

export default App;

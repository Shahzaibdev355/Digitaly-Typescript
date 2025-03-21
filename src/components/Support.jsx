import SupportHeader from "./SupportHeader";

import { useState, useEffect } from "react";



import { Link } from "react-router-dom";
import SupportForm from "./SupportForm";
import Footer from "./Footer";
import SupportFooter from "./SupportFooter";


const Support = () => {

  

  const links = [
    {
      title: "Il vous faut des réponses rapidement ?",
      description: "Vous trouverez ici ce dont vous avez besoin.",
    },
    {
      title: "DIGITALY<span className='support-links-span'>SERVICES</span> : Comment être suivi par DIGITALY ?",
      description: "Dernière mise à jours février 01, 2025",
    },
    {
      title: "DIGITALY<span className='support-links-span'>COMMUNITY</span> : Comment rejoindre community ?",
      description: "Dernière mise à jours février 01, 2025",
    },
    {
      title: "DIGITALY<span className='support-links-span'>CAREERS</span> : L’entreprise DIGITALY recrute tel en continue ?",
      description: "Dernière mise à jours février 01, 2025",
    },
    {
      title: "DIGITALY<span className='support-links-span'>SHOP</span> : Comment suivre ma commande ?",
      description: "Dernière mise à jours février 01, 2025",
    },
    {
      title: "DIGITALY<span className='support-links-span'>COMMUNITY</span> : Comment devenir un DIGITALYCREATOR ?",
      description: "Dernière mise à jours février 01, 2025",
    },
    {
      title: "DIGITALY<span className='support-links-span'>SERVICES</span> : Quels sont les services de maintenance ?",
      description: "Dernière mise à jours février 01, 2025",
    },
  ];
  



  return (
    <>
      <SupportHeader />

      <div
        className="support-container mx-auto p- mt-4 "
        id="tailwind-container"
      >
        {/* defines how many columns per screen ; grid-cols-1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Column 1 */}
          <div className="flex justify-center items-center">
            <SupportForm/>
          </div>

          {/* Column 2 */}
          <div className="support-column2-bg">
          <div className="p-4  support-column2">

            {
              links.map((link,index)=>(
                <Link className="support-links" key={index}>
                <h3 dangerouslySetInnerHTML={{ __html: link.title }}></h3>
                <p>{link.description}</p>
              </Link>
              ))
            }
            
           
          </div>
          </div>


        </div>
      </div>

<SupportFooter/>

    </>
  );
};

export default Support;

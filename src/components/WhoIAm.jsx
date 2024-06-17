import React from "react";
import CardText from "./CardText";
import PhotoAndName from "./PhotoAndName";

const WhoIAm = () => {
   return (
      <>
         <div className=" max-w-sm mx-auto">
            <h2 className="text-3xl font-bold mb-4">Who we are</h2>
            <p className="gray text-lg mb-6">
               We are a collaboration of Non Govt. and professionals working to ensure that government spending is done
               fairly, openly, efficiently, and creates the best value for money and best outcomes for Europe. We are
               working at the national and EU levels to advance the principles of openness in spending of funds,
               procurement, and company ownership within the EU.
            </p>
            <a href="#" className="text-blue-600 hover:underline flex items-center">
               See more
               <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                     fillRule="evenodd"
                     d="M12.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 14H3a1 1 0 110-2h10.586l-1.293-1.293a1 1 0 010-1.414z"
                     clipRule="evenodd"
                  ></path>
               </svg>
            </a>
         </div>
      </>
   );
};

export default WhoIAm;

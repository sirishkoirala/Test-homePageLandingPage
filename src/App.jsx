import React from "react";
import Homepage from "./components/Homepage";
import TitleParagraph from "./components/TitleParagraph";
import Card from "./components/Card";
import WhoIAm from "./components/WhoIAm";
import PhotoAndName from "./components/PhotoAndName";

const App = () => {
   return (
      <>
         <Homepage />
         <TitleParagraph />
         <div className=" flex contain flex-wrap justify-between px-4 mb-20">
            <Card />
            <Card />
            <Card />
         </div>
         <div className="bg-white">
            <div className="contain py-20 flex justify-between ">
               <div className="">
                  <WhoIAm />
               </div>
               <div className="">
                  <PhotoAndName />
               </div>
            </div>
         </div>
      </>
   );
};

export default App;

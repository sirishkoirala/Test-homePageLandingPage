import React from "react";
import Homepage from "./components/Homepage";
import TitleParagraph from "./components/TitleParagraph";
import Card from "./components/Card";

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
         <div className="bg-white py-20">
        
         </div>

      </>
   );
};

export default App;

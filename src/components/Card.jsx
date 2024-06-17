import React from "react";
import CardText from "./CardText";

const Card = () => {
   return (
      <div className=" max-w-xs justify-between bg-white rounded-xl shadow-md overflow-hidden mb-6">
         <div className="w-96 h-96 object-fill bg-[url(images/young.png)] rounded-xl mx-auto"></div>
         <div className="p-6">
            <CardText />
         </div>
      </div>
   );
};

export default Card;

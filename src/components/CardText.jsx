import React from "react";

const CardText = () => {
   return (
      <div>
         <h2 className=" font-bold text-lg text-zinc-900">Open Data Directive</h2>
         <p className="mt-3 text-zinc-600 text-sm">
            In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that
            European funds In view of Russia’s military action against the Ukrainian people,
         </p>
         <a href="#" className="mt-7 inline-flex items-center text-blue-600 hover:underline">
            Learn more
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path
                  fillRule="evenodd"
                  d="M12.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 14H4a1 1 0 110-2h9.586l-1.293-1.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
               ></path>
            </svg>
         </a>
      </div>
   );
};

export default CardText;

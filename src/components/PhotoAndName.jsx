import React from "react";

const PhotoAndName = () => {
   return (
      <>
         <div className=" flex gap-9 ">
            <div className="flex flex-col gap-4">
               <div className=" h-[471px] w-[328px] flex flex-col gap-3">
                  <div className="h-[415px] w-full rounded-2xl bg-[url('./images/WhatsApp.jpg')] bg-cover bg-center transition-bg-size duration-300 hover:bg-[length:105%]"></div>
                  <p className="font-semibold text-2xl black">Sirish Koirala</p>
               </div>
               <div className=" h-[471px] w-[328px] flex flex-col gap-3">
                  <div className="h-[415px] w-full rounded-2xl bg-[url('./images/glass.jpg')] bg-cover bg-center transition-bg-size duration-300 hover:bg-[length:105%]"></div>
                  <p className="font-semibold text-2xl black">Sirish Koirala</p>
               </div>
            </div>
            <div className="flex flex-col gap-4 md:mt-32">
               <div className=" h-[471px] w-[328px] flex flex-col gap-3">
                  <div className="h-[415px] w-full rounded-2xl bg-[url('./images/sidelook.jpg')] bg-cover bg-center transition-bg-size duration-300 hover:bg-[length:105%]  "></div>
                  <p className="font-semibold text-2xl black">Sirish Koirala</p>
               </div>
               <div className=" h-[471px] w-[328px] ">
                  <div className="h-[415px] w-full rounded-2xl bg-[url('./images/young.png')]  "></div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PhotoAndName;

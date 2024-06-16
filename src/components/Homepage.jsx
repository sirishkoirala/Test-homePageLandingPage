import React from "react";
import "./../App.css";
import "./Homepage.css"
import { IconSearch, IconLayoutNavbar, IconBolt, IconVideo, IconChevronDown } from "@tabler/icons-react";

const Homepage = () => {
   return (
      <div className="h-screen bg-cover bg-center bg-young">
         <nav className="flex items-center justify-between py-6 contain bg-transparent h-20">
            <div className="flex items-center space-x-4 gap-10">
               <div className="flex gap-4 items-center justify-center">
                  <img src="images/Logo.png" alt="Logo" />
               </div>
               <div className="hidden md:flex space-x-10 ">
                  <a href="#" className="text-white text-lg">
                     Home
                  </a>
                  <a href="#" className="text-white text-lg">
                     About Us
                  </a>
                  <a href="#" className="text-white text-lg">
                     Case Studies
                  </a>
                  <div className="relative group">
                     <button className="text-white text-lg">
                        <span className="flex gap-2 items-center justify-center">
                           Resourses
                           <IconChevronDown size={18} />
                        </span>
                     </button>
                     <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-4 w-96 rounded-md">
                        <div className="flex items-start space-x-4 pb-2">
                           <IconLayoutNavbar size={36} color="#1D6FA3" />
                           <div>
                              <h3 className="text-lg font-semibold text-zinc-800">Blog</h3>
                              <p className="text-zinc-400">The latest industry news, updates and info.</p>
                           </div>
                        </div>
                        {/* <hr /> */}
                        <div className="flex items-start space-x-4 py-4">
                           <IconBolt size={36} color="#1D6FA3" />
                           <div>
                              <h3 className="text-lg font-semibold text-zinc-800">Customer stories</h3>
                              <p className="text-zinc-400">Learn how our customers are making big changes.</p>
                           </div>
                        </div>
                        {/* <hr /> */}

                        <div className="flex items-start space-x-4 pt-2">
                           <IconVideo size={36} color="#1D6FA3" />
                           <div>
                              <h3 className="text-lg font-semibold text-zinc-800">Video tutorials</h3>
                              <p className="text-zinc-400">Get up and running on new features and techniques.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <IconSearch color="white" />
            </div>
         </nav>
         <hr className="bg-transparent" />

         <div className=" flex flex-col items-center justify-center h-full text-center text-white px-6 gap-12">
            <div className=" mb-24 flex flex-col gap-8">
               <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                     Beautiful analytics to grow smarter
                  </h1>
                  <p className="text-lg md:text-xl mb-6 w-3/5 mx-auto ">
                     Powerful, self-serve product and growth analytics to help you convert engage, and retain more
                     users.Trusted by over 4,000 startups.
                  </p>
               </div>
               <button className="heroButton text-white px-6 py-3 rounded-sm  text-lg md:text-xl flex items-center mx-auto">
                  Why Catalog?
                  <svg
                     className="w-5 h-5 ml-2"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Homepage;

import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-amber-400 lg:w-1/3 lg:mb-0 mb-4">
            Here are some of my Projects
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto text-yellow-300 leading-relaxed text-base">
            Here are some of the projects I've worked on. Click on them to learn more.
          </p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1 ml-20">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="Gallery image 1"
                className="w-full object-cover h-full object-center block ml-4 mb-6 hover:border-x-blue-800 hover:border-2"
                src="/Images/download.jpg"  
                width={500}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="Gallery image 2"
                className="w-full object-cover h-full object-center block ml-4 mb-6 hover:border-x-blue-800 hover:border-2"
                src="/Images/download1.jpg"  // Correct local image path
                width={501}
                height={301}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="Gallery image 3"
                className="w-full h-full object-cover object-center block ml-4 mb-6 hover:border-x-blue-800 hover:border-2"
                src="/images/download3.jpg"  // Corrected the typo here
                width={600}
                height={360}
              />
            </div>
          </div>

         </div>
         </div>
         </section>
        
         )
         
 }
 export default Project

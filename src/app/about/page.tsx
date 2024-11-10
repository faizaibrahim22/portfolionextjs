import React from "react";
import Image from "next/image";
import { SiLinkedin } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";



const About =()=>{
    return(
 <>
<section className=" text-white body-font">
    
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

  <h3 className="mt-15 text-5xl text-white text-center font-bold">About Me</h3>

    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
     alt="hero"
     src="/Images/jpg.png"
     width={300}
     height={400}
     />
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50"></h1>
      <p className="mb-4 leading-relaxed">
      Hi, I’m Faiza  a web developer and computer science student with a strong passion for building modern, fast, and dynamic web applications. Specializing in Next.js, along with core web technologies like HTML, CSS, JavaScript, and frameworks like React and Node.js, I focus on creating user-friendly, responsive websites that deliver high performance and smooth user experiences.
As a computer science student, I leverage my academic background to deepen my understanding of both front-end and back-end development. I enjoy using Next.js to build server-side rendered (SSR) applications and static websites that are SEO-friendly and lightning-fast.
Whether it’s a full-fledged web application or a personal project, I’m always excited to tackle new challenges and turn creative ideas into functional solutions.

      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg">Linkedin
        <SiLinkedin />
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-md text-lg">Github
        <FaSquareGithub />
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded-md text-lg">Whatsapp
        <FaWhatsapp />
        </button>

      </div>
    </div>
    <Skill/>
  </div>
</section>

</>
    )
}

export default About




const Skill =()=>{
    return(
        <>
          <h3 className="mt-20 text-5xl text-rose-300 underline   font-bold  "> MY Skills</h3>
          <ul >
            <li className="mb-4  text-slate-50 text-3xl underline ">HTML</li><div className="w-[300%]  mb-19 h-5 bg-yellow-300  rounded-full"></div>
            <li className="mb-4  text-slate-50 text-3xl underline" >CSS</li><div className="w-[200%]  mb-7  ml-18 h-5 bg-yellow-300  rounded-full"></div>
            <li className="mb-4  text-slate-50 text-3xl underline">Typescript</li><div className="w-[180%]  mb-2 h-5 bg-yellow-300  rounded-full"></div>
            <li className="mb-4  text-slate-50 text-3xl underline" >Next.js</li> <div className="w-[140%]  mb-2 h-5  bg-yellow-300 rounded-full"></div>
            <li className="mb-4  text-slate-50  text-3xl underline">Tailwind</li><div className="w-[213%]  mb-2 h-5  bg-yellow-300 rounded-full"></div>
          </ul>
        </>
    )
}


import React from "react";
import Link from "next/link";

const Navbar =()=>{
    return(
        <header className="text-gray-400 bg-red-800 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-24">
    <Link href="" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <h2  className="text-3xl font-semibold text-black hover:text-white">FAIZA QURESHI</h2>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5  text-black hover:text-white">Home</Link>
      <Link href="/about" className="mr-5 text-black hover:text-white">About</Link>
      <Link href="/project" className="mr-5 text-black hover:text-white">Project</Link>
      <Link href="/Contact" className="mr-5  text-black hover:text-white">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-purple-950 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">Download CV
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    )
}

export default Navbar
'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='bg-green-200 z-50 sticky top-0'>
      <header className="text-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/assets/picture/development-4536630_1280.png")} alt="logo" width={60} height={60} />
      <span className="ml-3 text-2xl">Shakir Hussain</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-red-500">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-yellow-500">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-blue-500">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-green-500">Projects</Link>
      <Link href={"#contact"} className="mr-5 hover:text-pink-500">Contact</Link>
    </nav>
    <a href='/assets/cv/Shakircv.pdf'>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-0">Download CV
    <AiOutlineCloudDownload className='text-xl ml-2' />
    </button>
    </a>
  </div>
</header> 
    </div>
  );
}

export default Navbar

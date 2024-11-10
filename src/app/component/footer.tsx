'use client'
import React from 'react'
import { BsYoutube } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-blue-200'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assets/picture/rb_6106.png")} alt="picture" width={60} height={60} />
      <span className="ml-3 text-xl">Shakir Hussain</span>
    </a>
    <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
    MSc in Physics | Web Development & Cybersecurity
    Building secure, innovative solutions with a passion for problem-solving. Let's connect! <br />
    © 2024 Shakir Hussain
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <Link target="_blank" href={"https://www.youtube.com/@shakirhussain4u"} className="ml-3 text-gray-500">
      <BsYoutube className='text-5xl hover:text-red-500'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
    );
}

export default Footer

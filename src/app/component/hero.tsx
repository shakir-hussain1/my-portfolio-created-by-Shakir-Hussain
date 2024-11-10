import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
      <section className="text-gray-600 body-font bg-fixed bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl underline text-3xl mb-4 font-medium text-gray-900">
        I am concerning with
        <br className="hidden lg:inline-block" />
        Web Development and Cyber Security
        {/* <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/> */}
      </h1><br />
      <p className="mb-8 leading-relaxed ">
      I offer expert services in web development and cyber security. As a web developer, I create responsive, high-performance websites and applications tailored to your needs. In cybersecurity, I protect your business from cyber threats with proactive security measures, including vulnerability assessments and threat detection.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="picture"
        width={500}
        height={500}
        src={require("../../../public/assets/picture/pp.jpg")}
      />
    </div>
  </div>
</section>
  )
}

export default Hero

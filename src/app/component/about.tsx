'use client'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image
        alt="about"
        className="object-cover object-center rounded mx-auto mt-16 w-[15rem]"
        width={500}
        height={500}
        src={require("../../../public/assets/picture/profile.jpg")}
      />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      {/* <div className="flex flex-col mb-10 lg:items-start items-center text-3xl text-gray-900"> */}
        <h1 className='text-3xl underline text-bold text-black'>About Me</h1> <br />
        <p>
        I’m Shakir Hussain, a professional with a Master’s in Physics and expertise in Web Development and Cybersecurity. With a strong analytical background, I approach challenges by breaking down complex problems into practical, secure solutions.
        </p><br />

<p>I specialize in building user-friendly websites and applications, ensuring they are both high-performance and protected from security threats. Always evolving, I combine my technical skills with a passion for innovation to deliver reliable, scalable digital solutions.</p><br />

<p>Let’s connect and explore how I can help bring your ideas to life with a focus on security and efficiency.
        </p>
        </div>
  </div>
</section>

    </div>
  )
}

export default About

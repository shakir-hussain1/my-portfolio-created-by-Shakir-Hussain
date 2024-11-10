import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
return (
<div id="project">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl underline font-medium title-font mb-4 text-black">
        My Projects
      </h1>
      <p className='text-2xl text-left'>
        Following are the some projects from my creations: 
        </p>
        <ul className='text-xl text-left text-black'>
          <li>Curriculum Vitae</li>
          <li>Calculator</li>
          <li>Stopwatch</li>
        </ul>
      
    </div>
    <div className="flex flex-wrap -m-8">
    
    <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/projects/monitor-1307227_1280.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              CURRICULUM VITAE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Curriculum Vitae
            </h1>
            <p className="leading-relaxed">
              This is a CV project for those who are interested in CV application.
            </p>
            <Link href="">
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/projects/163260.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              CALCULATOR PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed">
              This is a Calculator project for those who are interested in Calculator application.
            </p>
            <Link href="">
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/projects/technology-5901615_1280.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-500 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              STOPWATCH PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Stopwatch
            </h1>
            <p className="leading-relaxed">
              This is a Stopwatch project for those who are interested in Stopwatch application.
            </p>
            <Link href="">
            <p className="leading-relaxed text-blue-500 hover:underline">
            View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      
      </div>
  </div>
</section>
</div>
)
}

export default Project
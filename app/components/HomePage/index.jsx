"use client"; 
import React from 'react'
import Image from 'next/image'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 


export default function HomePage() {
  return (
    <>
      <div className='px-0 py-2 aspect-w-16 aspect-h-9'>
       <Image src="/smallpeice_logo.png" alt="smallpeice logo" width={60} height={60} className="pd-2"/>
      </div>
      <h1 className="sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[70%] text-5xl xl:text-6xl xl:text-center lg:text-5xl lg:text-center  font-bold text-transparent animate-fade-in-text bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 px-4 py-4">Want to find out which careers in engineering are for you?</h1>
      {/* <div className='px-0 py-2 rounded-md'>
       <Image src="/tips.png" alt="smallpeice tips" width={400} height={400} />
      </div> */}
      <div className='m-0'>
        <div className="relative inline-block  bg-white text-sm text-black text-center font-bold p-2 md:p-4 md:m-4 rounded-lg max-w-xs w-36 mb-10 mt-8 md:w-72 md:text-xl -rotate-6 animate-fade-in-bottom transition delay-200 z-0 outline outline-2 outline-black">
        <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></span>
        "What does a software engineer do?"
        </div>
      
        <div className="relative inline-block  bg-white text-sm text-black text-center font-bold p-2 md:p-4 md:m-4 rounded-lg max-w-xs w-36 mb-10 mt-8  md:w-72 md:text-xl rotate-6 animate-fade-in-bottom-opposite animation-delay-100 md:animation-delay-200 z-0 outline outline-2 outline-black">
        <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></span>
        "How much does a mechanical engineer earn?"
        </div>
      </div>
      <Link href="/pages/userPage" className="flex justify-center items-center w-[100%] m-4"><button className="sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] w-[100%] px-8 py-4 md:px-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg md:text-xl m-4 font-semibold rounded-xl shadow-md hover:bg-purple-500 active:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Find your perfect career...
      </button>
      </Link>
    </>
  )
}

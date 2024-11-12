"use client"; 
import Image from 'next/image'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

import { useState } from 'react';

export default function userPage() {
const [selectedUser, setSelectedUser] = useState(null);

const handleClick = (user) => {
  setSelectedUser(user)
  console.log("user changed", user)
}

  const users = [
    {
      firstName: "Aisha",
      lastName: "Khan",
      img: "/avatars/1.png"
    },
    {
      firstName: "Maya",
      lastName: "O'Sulli",
      img: "/avatars/2.png"
    },
    {
      firstName: "Chen",
      lastName: "Wei",
      img: "/avatars/1.png"
    },
    {
      firstName: "Raj",
      lastName: "Patel",
      img: "/avatars/4.png"
    },
    {
      firstName: "George",
      lastName: "Okafo",
      img: "/avatars/5.png"
    },
    {
      firstName: "Liam",
      lastName: "Smith",
      img: "/avatars/6.png"
    }
  ];

  return (
    <>
    <div className="grid items-center justify-items-center min-h-100vh p-8 pb-0 gap-0 overflow-auto hide-scrollbar font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-950 to-blue-1000">
       <div className='px-0 py-2 aspect-w-16 aspect-h-9'>
        <Image src="/smallpeice_logo.png" alt="smallpeice logo" width={60} height={60} className="pd-2"/>
       </div>
      <h1 className="sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-5xl xl:text-6xl lg:text-5xl md:text-center  font-bold text-transparent animate-fade-in-text bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 px-4 py-4 ">Who would you like to talk to?</h1>
      
      <div className='grid grid-cols-3 justify-around gap-2 md:pt-4 overflow-auto hide-scrollbar'>
        {users.map((user, index) => 
        <div className={`flex flex-col gap-2 text-center items-center cursor-pointer `}
        key={index} 
        onClick={() => handleClick(user)}>
          <Image src={user.img} width={80} height={80} alt={user.firstName} className='focus:ring-4 focus:ring-orangeYellow focus:ring-opacity-100 rounded-full' tabIndex={0} />
          <h6>{user.firstName} {user.lastName}</h6> 
          
        </div>)}
      </div>

      <Link href="#" className="flex justify-center items-center w-[100%] m-4"><button className="sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] w-[100%] px-8 py-4 md:px-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg md:text-xl m-4 font-semibold rounded-xl shadow-md hover:bg-purple-500 active:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">
       Find your perfect career...
      </button>
      </Link>
   </div>
   </>
  )
}

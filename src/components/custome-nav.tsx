import React from 'react'
import Link from "next/dist/client/link";
import Image from "next/image";
import { Button } from './ui/button';
function CustomeNav() {
  return (
    <nav className="w-full p-5 flex justify-between border-b-2 items-center fixed z-10 bg-white dark:bg-zinc-900 ">
    <div className="w-full md:mx-52 flex justify-between items-center">
   
    <div className="flex justify-center items-center">
    <Image
         src="https://avatars.githubusercontent.com/u/150508557?s=200&v=4" // Path to your image
         alt="A beautiful landscape"
         width={45} // Desired width in pixels
         height={45} // Desired height in pixels
         priority // Optional: Preload the image for better performance
       />
    <div className="flex-col flex justify-start items-start ml-2">
    
    <p className="font-semibold text-xl ">Learning</p> <p className="text-xs text-zinc-500">by Bugs & Glitches</p>
   </div>
    </div>
   <div>
 <Link href='/Educator/auth/sign-in'>   <Button variant='link'>Educator</Button> </Link>
 <Link href='/Learner/auth/sign-in'>   <Button variant='link'>Learner</Button> </Link>
    
  
   </div>
    </div>
    </nav>
  )
}

export default CustomeNav
import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

function CustomeFooter() {
  return (
    <div className="w-full h-full mt-10">
      {/* Image with Gradient Overlay */}
      <div className="relative w-full mt-10">
        <AspectRatio ratio={16 / 9}>
          <div className="relative w-full h-full">
            <Image
              src="https://i.pinimg.com/originals/0b/2a/3c/0b2a3c7d0477b8502ce269489b147072.gif"
              alt="Image"
              layout="fill"
              className="object-cover shadow-inner shadow-black"
            />
          </div>
        </AspectRatio>

        {/* Inner Shadow Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent shadow-inner" />
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden block px-7 mt-10">
        <div className="w-full flex justify-start items-start">
          <div className="flex justify-center items-center">
            <div className="flex-col flex justify-start items-start ml-2">
              <p className="font-semibold text-xl">Learning</p>
              <p className="text-xs text-zinc-500">by Bugs & Glitches</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="lg:mx-56 grid lg:grid-cols-5 grid-cols-2 p-5">
        {["Products", "Services", "Support", "Company"].map((category, index) => (
          <div key={index}>
            <Button variant="link" disabled>
              {category}
            </Button>
            <ul>
              {[...Array(8)].map((_, i) => (
                <li key={i}>
                  <Link href="#">
                    <Button variant="link">Menu {i + 1}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="hidden lg:block">
        <div className="w-full flex justify-end items-start">
          <div className="flex justify-center items-center">
            <div className="flex-col flex justify-start items-start ml-2">
              <p className="font-semibold text-xl">Learning</p>
              <p className="text-xs text-zinc-500">by Bugs & Glitches</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Desktop Footer */}
      

      {/* Footer Bottom Section */}
      <div className="lg:mx-56 flex justify-between p-5">
        <Button variant="link" disabled>
          © 2024 Bugs And Glitches.
        </Button>
        <Button variant="link">Dark Mode</Button>
      </div>
    </div>
  );
}

export default CustomeFooter;

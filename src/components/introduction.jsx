"use client";
import React from 'react';

import { Orbitron } from 'next/font/google';
import Line from '@/svg/line1.svg';

const orbitfont = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbit',
});

export default function Introduction() {
  return (
    <div className={orbitfont.variable}>

      {/* MAIN HERO BOX */}
      <div
        className="
          relative z-10 
          flex flex-col items-center justify-center 
          text-center px-4 py-10

          w-8/9 sm:w-[85%] md:w-[70%] lg:w-[60%] 
          mx-auto

          h-auto 

          bg-[rgb(13,17,23)] bg-opacity-30
          border border-gray-700/50
          border-b-0 
          rounded-2xl backdrop-blur-Bg
          md:border-none
          
          bg-[url('/images/Container.png')] 
          bg-no-repeat bg-right-top bg-contain
          bg-cover

          
        "
      >

        <h1 className="font-orbit text-xl mr-25 sm:text-4xl md:text-5xl relative md:mt-50 md:mr-110 ">
          Tian Cimerman
        </h1>

        <p className="mt-4 text-left text-sm sm:text-lg md:text-xl md:mr-80 text-gray-400 max-w-[80%] mx-auto">
          I’m a student who enjoys creating and learning through personal projects.
        </p>

        <Line className="w-8 md:w-7 h-auto  relative top-10 sm:mr-200 hidden md:block" />

      </div>

      {/* DECORATIVE LINE BELOW */}
      <div className="mt-10 w-full h-24 bg-[url('/line1.svg')] bg-no-repeat bg-center" />
    </div>
  );
}

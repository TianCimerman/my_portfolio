"use client";
import React from 'react';
import Image from 'next/image';
import { Orbitron } from 'next/font/google';
import Image1 from '@/svg/Embeeded-Security-Image.svg';
import { Open_Sans } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';

const orbitfont = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbit',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Contact() {
  return (
    <div className={orbitfont.variable}>

      {/* MAIN HERO BOX */}
      <div 
        className="
          relative z-10 
          md:top-[0rem]

          flex flex-col md:flex-row justify-center 
          h-auto md:h-[35rem] 
          px-4 w-8/9 md:w-3/5 mx-auto

          bg-[rgb(13,17,23)] bg-opacity-30
          
          border-t-0 
          border border-gray-700/50
          border-b-0 
          rounded-2xl backdrop-blur-Bg
          bg-none    
          md:bg-[url('/images/celestial-fog-small_1.png')]   /* show bg only on desktop */
          md:bg-no-repeat
          md:bg-[right_2rem_top]
          md:bg-[length:300px_250px]
          md:border-none
          md:rounded-none
          py-10 md:py-0
        "
        id="contact"
      >
        {/* TOP IMAGE — Centers on phone */}
        <div className={`${openSans.className} relative mt-4 md:mt-[2.2rem] flex justify-center hidden  md:block`}>
          <Image
            src="/images/branch_purple.png"
            alt="My picture"
            width={90}
            height={80}
            className="
              rounded-full  
              md:left-[-9rem] md:top-[-5rem]
              relative 
            "
          />
        </div>

        {/* TEXT SECTION */}
        <div 
          className={`
            w-full md:w-4/8 
            ${openSans.className} 
            relative 
            top-4 md:top-[3rem] 
            left-0 md:left-[-5rem]
            text-center md:text-left
            px-2
          `}
        >
          <h1 
            className="text-[1.8rem] md:text-[2rem]" 
            style={{ color: 'rgb(147 154 255)' }}
          >
            Contact me
          </h1>

          <p className='text-[1.2rem] md:text-[1.5rem] mt-2'>
            I love sharing ideas, working on new projects, and exploring ways technology can make a difference.  
            <span style={{ color: 'rgb(179 132 249)' }}>
               If my work resonates with you, I’d be happy to hear from you.
            </span>
          </p>

          {/* SOCIAL ICONS */}
          <div className='flex flex-row justify-center md:justify-start space-x-5 mt-5'>
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" style={{ color: 'rgb(179 132 249)' }} />
            <FontAwesomeIcon icon={faGithubSquare} className="text-4xl" style={{ color: 'rgb(179 132 249)' }} />
            <FontAwesomeIcon icon={faGoogle} className="text-4xl" style={{ color: 'rgb(179 132 249)' }} />
          </div>
        </div>
      </div>

      {/* SVG BELOW — Scales for phones */}
      <div className="flex justify-center  ">
        <Image1 className="w-11/12 md:w-3/5 h-full md:h-[35rem] relative top-[-5rem] md:top-[-10rem] mx-auto z-15 hidden  md:block" /> 
      </div>

    </div>
  );
}

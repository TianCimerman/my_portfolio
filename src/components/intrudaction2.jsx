"use client";
import React from 'react';
import Image from 'next/image';
import Icon from '@/svg/Icon.svg';
import Line from '@/svg/Branch.svg';
import Line2 from '@/svg/Line-4.svg';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Introduction() {
  return (
    // Hide entire section on phones
    <div className="hidden sm:block bg-[rgb(13,17,23)] bg-opacity-30 pb-20 w-full md:w-3/5 mx-auto">

      {/* TOP HERO CARD */}
      <div
        className="
          relative flex flex-row items-center
          h-[35rem] px-0 mx-auto
          bg-[rgb(13,17,23)] bg-opacity-30
          border border-gray-700/50 rounded-2xl backdrop-blur-Bg
          mt-[-9rem] border-b-0
                    md:border-none
          md:rounded-none
          
        "
        id="about"
      >
        <div className="mr-10 relative">
          <Icon className="w-20 h-auto relative top-50 left-[7.8rem] z-11" />
          <Line className="w-2 h-auto relative top-50 left-[10.5rem]" />
        </div>

        <div className={`${openSans.className} w-full`}>
          <h1 className="text-[2.2rem] text-green-500 relative left-[8rem] top-[-7rem]">
            About me
          </h1>
          <p className="text-[1.5rem] text-left relative left-[8rem] top-[-6rem] w-full md:w-4/6">
            <span className="text-green-500">
             I am a student passionate about technology and innovation. I like working on independent projects where I can experiment, build, and solve problems.
            </span> Through these experiences, I’ve gained practical skills and developed a strong drive to keep learning and creating.
          </p>
        </div>
      </div>

      {/* LARGE ABOUT PARAGRAPH */}
      <div className="flex justify-center items-center mt-[-13rem] w-full mx-auto">
        <div
          className={`${openSans.className} w-full sm:w-5/7 z-20 text-[1.1rem] relative left-11
          bg-[rgb(22,27,34)] bg-opacity-30 p-[3rem] rounded-xl backdrop-blur-Bg border border-gray-700/50`}
          
        >
          <p>
              My life has always been guided by curiosity and the desire to build things on my own. From a young age, I was drawn to exploring how things work, whether by experimenting, taking something apart, or trying to create something new from scratch. Over time, this grew into a habit of starting small projects, where I could test ideas, learn new skills, and challenge myself without relying on step-by-step instructions.
              <br />
              <br />        
              Working on my own projects has taught me much more than just technical knowledge. It has shown me how to stay persistent when things don’t work out the first time, how to adapt and find creative solutions, and how rewarding it feels to see an idea take shape in reality. Each project represents not only what I’ve built, but also what I’ve learned along the way.
          </p>
        </div>
      </div>

      {/* CLOUD + TEXT */}
      <div className="flex flex-row relative items-center mt-[-10rem]">

        <div>
          <Image
            src="/images/cloud-line-art.png"
            alt="My picture"
            width={300}
            height={300}
            className="mx-auto ml-[13rem] mt-[12rem]"
          />
        </div>

        <div
          className={`${openSans.className} relative z-21 text-[1.1rem] bg-[rgb(22,27,34)] bg-opacity-30
          p-[3rem] rounded-2xl backdrop-blur-Bg border border-gray-700/50 w-3/8 mt-[8rem] md:ml-[4rem]`}
        >
          <p>
            Today, I continue to approach life with that same mindset: curious, independent, and motivated by the chance to grow. My portfolio reflects this journey and showcases the projects that represent both my skills and my passion for learning by doing.
          </p>
        </div>
      </div>

      {/* BOTTOM SVG */}
      <div>
        <Line2 className="w-2 h-auto relative top-[-3rem] left-[10.2rem] z-10" />
      </div>

    </div>
  );
}

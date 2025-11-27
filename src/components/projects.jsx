"use client";
import React from 'react';
import Image from 'next/image';
import Line from '@/svg/Line-2.svg';
import Line2 from '@/svg/git-branch-productivity.svg';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // regular and bold
});

export default function Projects() {
  return (
    <div className="md:bg-[rgb(13,17,23)] bg-opacity-30 p-5 w-7/7 md:w-3/5 mx-auto ">

      {/* MAIN HERO BOX */}
      <div 
        className="
          relative z-1 
          
          flex flex-col  items-center 
          text-center p-8 md:px-0 mx-auto
          bg-[rgb(13,17,23)] bg-opacity-30
          mt-[-9rem]
          md:mt-[-13rem]
          md:border-t-0 md:border-b-0 
          border border-gray-700/50
          border-b-0 
          rounded-2xl backdrop-blur-Bg
          md:border-none
        "
        id="projects"
      >
        <div className='flex flex-row items-start mx-auto w-full md:w-4/5 md:mr-55'>
        <div className={`${openSans.className} mb-4 md:mb-0`}>
          <Image
            src="/images/branch.png"
            alt="Branch"
            width={90}
            height={80}
            className="rounded-full mx-auto md:ml-[6.5rem] mt-2 relative md:top-3 hidden md:block"
          />
        </div>

        <div className={`${openSans.className} relative z-8`}>
          <h1 className='text-[2rem] md:text-[3rem] text-left md:relative md:top-15 md:left-[8rem] text-center md:text-left'
            style={{ color: 'rgb(255 162 139)'}}
          >
            Projects
          </h1>
          <div className={`w-full md:w-6/7 text-[1rem] mt-4 md:mt-20 md:ml-30 bg-[rgb(22,27,34)] bg-opacity-30 p-4 md:p-[3rem] rounded-2xl backdrop-blur-Bg mx-auto`}>
            <h1 style={{ color: 'rgb(255 183 124)'}} className='text-left text-[1.2rem]'>Smart home monitor</h1>
            <ol className="list-disc ml-5 mt-2 text-left">
              <li>A basic home monitoring system tracks indoor and outdoor temperature, humidity, and total electricity consumption. Data is stored in InfluxDB and visualized with Grafana. The project uses Arduino (ESP32), Raspberry Pi, and sensors, with a web interface for real-time and historical data.</li>
              <li style={{ color: 'rgb(139,148,158)' }}>For more details, including the full source code, setup instructions, and project documentation, you can visit my GitHub <a href="#" className='text-[rgb(255,183,124)]'>GitHub</a>.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* PROJECT ROW */}
      <div className="flex flex-col md:flex-row items-start mt-3 md:mt-[-8rem] space-y-5 md:space-y-0 md:space-x-3 md:ml-45 z-15">

        <div className='flex flex-col bg-[rgb(22,27,34)] bg-opacity-30 border border-gray-700/50 rounded-xl backdrop-blur-Bg p-4 md:p-[2rem] mx-auto md:mx-0'>
          <Image
            src="/images/dashboard.png"
            alt="Smart home monitor"
            width={600}
            height={400}
            className="mx-auto md:mx-0"
            style={{ width: '100%', maxWidth: '30rem', height: 'auto' }}
          />
          <h1 className='text-left text-[1.5rem] mt-2 md:mt-4' style={{ color: 'rgb(255 183 124)'}}>Smart home monitor</h1>
        </div>

        <div className='flex flex-col bg-[rgb(22,27,34)] bg-opacity-30 border border-gray-700/50 rounded-xl backdrop-blur-Bg p-4 md:ml-10 md:p-[3rem] mx-auto md:mx-0 md:w-2/6'>
          <h1 className='text-left text-[1.2rem]' style={{ color: 'rgb(255 183 124)'}}>TempHumid Tracker</h1>
          <ol className="list-disc ml-5 mt-2 text-left">
            <li>This project is built for the FireBeetle ESP32-E board using PlatformIO.</li>
            <li style={{ color: 'rgb(139,148,158)' }}>It reads temperature and humidity data from an Adafruit SHT4x sensor, measures battery voltage, and sends the data via UDP over Wi-Fi to a server (e.g., Telegraf + InfluxDB). </li>
            <li>For more details, including the full source code, setup instructions, and project documentation, you can visit my  <a href="#" className='text-[rgb(255,183,124)]'>GitHub</a>.</li>
          </ol>
        </div>
      </div>

      {/* SECOND PROJECT ROW */}
      <div className="flex flex-col md:flex-row items-start mt-3 md:mt-[-15rem] space-y-3 md:ml-45 md:space-y-0 md:space-x-6">
        <Line className="w-2 h-25rem relative top-10 left-9 md:left-[-2.5rem] z-10 hidden md:block" />
        <Line2 className="w-55 h-auto relative top-30 left-9 md:left-[-4rem] z-10 hidden md:block" />

        <div className='flex flex-col bg-[rgb(22,27,34)] bg-opacity-30 border border-gray-700/50 relative rounded-xl backdrop-blur-Bg p-4 md:p-[3rem] mx-auto md:mx-0 md:w-5/8 z-10 md:left-[-6rem] md:mt-30'>
          <h1 className='text-left text-[1.2rem]' style={{ color: 'rgb(255 183 124)'}}>SolarLog</h1>
          <ol className="list-disc ml-5 mt-2 text-left">
            <li>SolarLog is a Python-based project to track my home solar energy system’s power consumption and production. The project connects directly to a SolarEdge inverter via the Modbus TCP protocol, collects real-time data, and stores it in InfluxDB for long-term analysis and visualization in Grafana.</li>
            <li style={{ color: 'rgb(139,148,158)' }}>For more details,  you can visit my GitHub</li>
          </ol>
        </div>

        <div className='flex flex-col bg-[rgb(22,27,34)] bg-opacity-30 border border-gray-700/50 rounded-xl backdrop-blur-Bg md:w-6/6 p-4 md:p-[2rem] mx-auto  md:mt-85 z-12 relative md:left-[-3rem]'>
          <Image
            src="/images/dashboard.png"
            alt="Visit"
            width={800}
            height={500}
            className="mx-auto md:mx-0"
            style={{ width: '100%', maxWidth: '30rem', height: 'auto' }}
          />
          <h1 className='text-left text-[1.5rem] mt-2 md:mt-4' style={{ color: 'rgb(255 183 124)'}}>Visit</h1>
        </div>
      </div>

      {/* COMMUNITY WEBSITE */}
      <div className='flex flex-col bg-[rgb(22,27,34)] bg-opacity-30 border border-gray-700/50 rounded-xl p-4 md:p-8 mx-auto mt-3 md:mt-[-8rem] w-full md:w-5/8 z-5'>
        <h1 className='text-left text-[1.5rem]' style={{ color: 'rgb(255 183 124)'}}>Local community website</h1>
        <ol className="list-disc ml-5 mt-2 text-left">
          <li>This wesite is a WordPress-powered website created to promote the cultural heritage, tourism, and natural beauty of Dole pri Litiji in Slovenia. The site highlights traditional charcoal-making, local farms, hiking trails, and community events, while also serving as a resource for both visitors and locals.</li>
          <li style={{ color: 'rgb(139,148,158)' }}>The website goal is to strengthen the visibility of Oglarska dežela as a cultural and tourist destination, helping preserve local traditions while attracting visitors to the region.</li>
        </ol>
      </div>
    </div>
    </div>
  );
}

import React from 'react';
import logo from './assets/logo.png';
import trophy from './assets/trophy.png';
import group from './assets/group.png';
import tools from './assets/tools.png';
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-500">

      <section className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <img src={trophy} alt="trophy-logo" className="mt-8 mb-4 md:mb-0" width={500} />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-8 py-4">
          <div className="flex flex-col items-center">
            <img src={logo} alt="main-logo" className="mb-4 md:mb-0" />
            <h3 className='text-lg font-semibold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul className="list-disc pl-4">
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src={group} alt="group-logo" className='mt-4' />
            <p className="mt-4">Government of India has awarded the <span className="font-bold">National Energy Conservation Award 2018</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center p-8 gap-4">
        <div className="w-full mb-4 md:mb-0 md:mr-4">
          <h4 className="text-xl font-bold">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY  RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h4>
        </div>
        <div className="w-full flex justify-center">
          <img className="object-contain" src={tools} alt="tools-logo" width={1000} />
        </div>
        <br />
        <div className="w-full mt-4 md:mt-0">
          <p className="text-center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
      </section>
      <hr className="my-6 border-t-2 border-red-500 mx-8" />

      <section className='text-center gap-4 px-6 py-4'>
        <div>
          <h3 className='font-bold text-xl'>C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        </div>
        <div>
          <p className='text-medium'>CHEMICALS <span className='text-red-500'>|</span> PROCESS POWER WATER <span className='text-red-500'>|</span> WASTE WATER OILS <span className='text-red-500'>|</span> GAS PHARMA SUGARS <span className='text-red-500'>|</span> DISTILLERIES PAPER <span className='text-red-500'>|</span> PULP MARINE <span className='txt-red-500'>|</span> DEFENCE METAL <span className='text-red-500'>|</span> MINING FOOD <span className='te'>|</span> BEVERAGE PETROCHEMICAL <span className='text-red-500'>|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className='text-red-500'>|</span> RESIDENTIAL</p>
        </div>
      </section>

      <footer className='flex flex-col items-center md:flex-row justify-evenly mx-4 p-4 md:p-12 bg-red-600 text-white'>
  <span className='mb-4 md:mb-0 text-center md:text-left'>
    <IoCall className='inline-block mr-2' /> Toll free: 1800 200 1734
  </span>
  <span className='mb-4 md:mb-0 text-center md:text-left'>
    <FaFacebook className='inline-block mr-2' /> www.facebook.com/cripumps
  </span>
  <span className='text-center md:text-left'>
    <BsGlobe className='inline-block mr-2' /> www.crigroups.com
  </span>
</footer>


    </main>

  )
}

export default App
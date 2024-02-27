import React from 'react';
import logo from './assets/logo.png';
import trophy from './assets/trophy.png';
import group from './assets/group.png';
import tools from './assets/tools.png';

function App() {
  return (
    <div className="bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-500 min-h-screen">
      {/* Header */}
      <header className="flex flex-col justify-center items-center gap-4 md:flex md:flex-row">
        <img src={trophy} alt="trophy-logo" width={150} className='md:w-400' />
        <img src={logo} alt="main-logo" className='w-40 md:w-auto' />
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row md:justify-between px-4 md:px-12 py-8 gap-4">
        {/* Left Section */}
        <section className="w-full md:w-1/2 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
          <ul className="list-disc gap-2 px-4">
            <li className="text-base md:text-lg">
              C.R.I. is the highest contributor in the country for the projects of
              EESI (Energy Efficiency Services Limited) to replace old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
            <li className="text-base md:text-lg">
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
          </ul>
          {/* Image Placeholder */}
          <div className="w-64 rounded-md md:w-96">
            <img src={group} alt="group-img" />
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 md:w-1/2 md:flex md:flex-col-reverse">
          <h2 className="text-2xl font-bold md:text-3xl md:order-1">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
          </h2>

          <img src={tools} alt="tools-img" height={300} className='object-contain md:w-full md:order-2' />

          <p className="text-base md:text-lg md:order-3">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems-Motors
          </p>

          <hr className='md:order-4' />

          <section className="w-full md:w-auto flex flex-col items-center gap-4 md:order-5">
            <h2 className="text-xl font-bold md:text-2xl">
              C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h2>
            <ul className="list-disc gap-2 px-4">
              <li>CHEMICALS & PROCESS</li>
              <li>POWER</li>
              <li>WATER & WASTE WATER</li>
              <li>OILS & GAS</li>
              <li>PHARMA</li>
              <li>SUGARS & DISTILLERIES</li>
              <li>PAPER & PULP</li>
              <li>MARINE & DEFENCE</li>
              <li>METAL & MINING</li>
              <li>FOOD & BEVERAGE</li>
              <li>PETROCHEMICAL & REFINERIES</li>
              <li>SOLAR</li>
              <li>BUILDING</li>
              <li>HVAC</li>
              <li>FIRE FIGHTING</li>
            <li>AGRICULTURE & RESIDENTIAL</li>
          </ul>
        </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col justify-center mx-4 py-2 items-center bg-red-600 text-white">
        
        <div className="flex flex-row gap-4 mt-4">
          <p className="text-base md:text-lg">Toll free: 1800 200 1734</p>
          <a
            href="https://www.facebook.com/cripumps"
            className="text-base md:text-lg hover:underline"
          >
            www.facebook.com/cripumps
          </a>
          <a
            href="https://www.crigroups.com"
            className="text-base md:text-lg hover:underline"
          >
            www.crigroups.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
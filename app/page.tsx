'use client'
import React from 'react';
import './globals.css';
import Navbar from '@/src/Components/Navbar';
import Image from 'next/image';
import Ext from '../src/img/extensionDesign.png';
import CardService from '@/src/Components/Card/CardService';
import SwitchInfo from "@/src/Components/SwitchInfo/SwitchInfo";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-900">
          <Navbar />
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen p-5">
        <div className="flex flex-col items-center justify-center w-full h-full mt-8 max-w-7xl md:flex-row">
            <div className="flex flex-col p-4 md:p-0">
              <p className="mb-5 text-black dark:text-white">CRYPTO MANAGER</p>
              <h1 className="w-full text-4xl font-bold text-black dark:text-white md:text-6xl md:w-10/12">
                <span className="text-titleSpanText dark:text-titleSpanText">Simplifiez</span> votre gestion grâce à{' '}
                <span className="text-titleSpanText dark:text-titleSpanText">CryptoExtension</span>
              </h1>
              <p className="w-full mt-4 text-xl text-black dark:text-white md:w-8/12 md:text-2xl md:mt-9">
                Entièrement développé sur la blockchain Ethereum, profitez d’un projet innovant et rare
              </p>
              <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8 md:w-[700px] md:mt-16"></div>
              <div className="flex flex-col gap-4 mt-8 md:flex-row md:gap-12 md:mt-10">
                <button className="px-8 py-2 text-black border-2 rounded-md border-titleSpanText dark:text-white md:px-24">Dashboard</button>
                <button className="px-8 py-2 text-black border-2 rounded-md border-titleSpanText dark:text-white md:px-16">Download Extension</button>
              </div>
            </div>
            <div className="mt-8 border-2 border-white rounded-[15px] md:mt-0 md:ml-8">
              <Image src={Ext} alt="" width={500} height={650} />
            </div>
          </div>
          <div>
            <CardService/>
          </div>
          <div>
            <SwitchInfo/>
          </div>
          
        </main>
      </div>
    </>
  );
}

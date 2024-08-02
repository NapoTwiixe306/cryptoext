// components/CardService.tsx
import React from 'react'
import { services } from './CardData'

export default function CardService() {
  return (
    <div className="flex items-center justify-center text-white mt-52 ">
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-full gap-3 p-6 transition-all duration-300 bg-gray-100 border-2 border-transparent rounded-lg shadow-lg dark:bg-gray-800 hover:border-blue-500">
              <div className='flex gap-6'>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{service.title}</h3>
              </div>
              <p className='text-black dark:text-white'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

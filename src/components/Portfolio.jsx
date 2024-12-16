import React from 'react'
import { portfolios } from '../constants/portfolio'

function Portfolio() {
    return (
      <div name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen scroll-mt-20">
  
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className='pb-8'>
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                  <p className='py-6'>Check out some of my work</p>
              </div>
  
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0'>
                  {portfolios.map(({ id, name, image, skills, link, demoLink }) => (
                      <div key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col items-center'>
                          {/* Portfolio Name */}
                          <h2 className="font-bold text-white mb-4 text-center truncate">{name}</h2>
  
                          {/* Portfolio Image */}
                          <div className='w-full mb-4'>
                              <img 
                                  src={image} 
                                  alt={name} 
                                  className='rounded-md duration-200 hover:scale-105 w-full h-[200px] object-cover'
                              />
                          </div>
  
                          {/* Buttons */}
                          <div className='flex justify-center space-x-4 w-full'>
                              <button className="px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => { demoLink ? window.open(demoLink, '_blank'): alert("Demo is not available for this project.")} }>Demo</button>
                              <button className="px-6 py-3 m-4 duration-200 hover:scale-105"   onClick={() => { link ? window.open(link, '_blank'): alert("Link to project is not available, or it's a private project. Please contact me if you need more details on this project")} }
                              >Code</button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    );
}

export default Portfolio

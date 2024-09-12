import React from 'react'
import DAshboard from '../../components/buttonDachboard'


export default function detailles() {
  return (
    <div className='flex '>
     <DAshboard/>

{/* <!-- component --> */}
<div className="antialiased bg-black w-full h-screen  text-slate-300 relative py-4">
    <div className="  sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl h-full  ">
    <div className="max-w-5xl  mx-auto px-6 sm:px-6 lg:px-8 h-full flex justify-center items-center ">
           <form action="" className=' w-full'>
            <div className=' w-full  flex  justify-center items-center md:ml-6 md:mt-0 mt-4'>
            <div className='w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4'>
                <label htmlFor="key" className='font-semibold leading-none text-gray-300'>key</label>
                <input name="key" id="key"className='leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'/>
            </div>
            <div className='w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4'>
                <label htmlFor="value"className='font-semibold leading-none text-gray-300'>value</label>
                <input name="value" id="value"className='leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'/>
            </div>
            </div>
            <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-800 rounded hover:bg-black/60 focus:ring-2 focus:ring-offset-2 focus:bg-black/60 focus:outline-none">
                        Add Details
                    </button>
                </div>
           </form>
    </div> 
            
    </div>
           
        </div>
    </div> 






    // </div>
  )
}

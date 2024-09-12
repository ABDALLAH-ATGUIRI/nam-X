import React from 'react'

export default function updateCars() {
  return (
    <div> 
    <div className="w-full bg-gray-800 h-screen ">
    <div className="bg-gradient-to-b bg-black/60 h-96 "></div> 
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-80">
            <p className="text-3xl font-bold leading-7 text-center text-white">Update Data Of Cars</p> 
            <form action="" method="post"> 
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Name</label>
                        <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-300">Type</label>
                        <select typeof="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Colors</label> 
                        <select typeof="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                    
                </div>
                <div>
                    
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-gray-300">Images</label>
                        <input  type ='file' className="h-30  text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded 
                        file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-black file:text-gray-50
      hover:file:bg-slate-700"/>
                    </div>
                </div>
                <p className="font-semibold leading-none text-gray-300 mt-5" >Details</p>
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">key</label>
                        <select typeof="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-300">value</label>
                        <select typeof="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                </div>
                
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-black/60 rounded hover:bg-black/60 focus:ring-2 focus:ring-offset-2 focus:bg-black/60 focus:outline-none">
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

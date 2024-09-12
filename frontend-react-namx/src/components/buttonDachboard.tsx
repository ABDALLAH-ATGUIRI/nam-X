import { useState } from "react";
import { IoCarSport } from "react-icons/io5"
import { BsBorderStyle } from "react-icons/bs"
import { FaUserFriends } from "react-icons/fa"
export default function Sidebar() {
    return (

        
    <div className="flex antialiased bg-black  h-screen text-slate-300 relative py-4">
            <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">Dashboard<span className="text-indigo-400">.</span></h1>
            <p className="text-slate-400 text-sm mb-2">Welcome back</p>
            <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                <div>
                    <h1> <img className="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt=""/>  </h1>
                </div>
                <div>
                    <p className="font-medium group-hover:text-indigo-400 leading-4">Admin</p>
                    <span className="text-xs text-slate-400">Dashboard</span>
                </div>
            </a>
            <hr className="my-2 border-slate-700"/>
            <div id="menu" className="flex flex-col space-y-2 my-5 ">
                <a href="/dashboard/cars" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-6 items-center">
                        <div className=" text-2xl"> 
                            <IoCarSport/>            
                              
                        </div>
                        <div>
                            <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Cars</p>
                        <p className="text-slate-400 text-sm hidden md:block">Data overview</p>
                        </div>
                        
                    </div>
                </a>
                <a href="/dasboard/orders" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                    <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-6 items-center">
                        <div className=" text-2xl">
                            <BsBorderStyle/>                             
                        </div>
                        <div>
                            <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Orders</p>
                        <p className="text-slate-400 text-sm hidden md:block">Manage invoices</p>
                        </div>
                        <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">23</div>
                    </div>
                </a>
                <a href="/dasboard/Clients" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-6 items-center">
                        <div className=" text-2xl">
                        <FaUserFriends/>                              
                        </div>
                        <div>
                            <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Users</p>
                        <p className="text-slate-400 text-sm hidden md:block">Manage users</p>
                        </div>
                        
                    </div>
                </a>
                <a href="/dasboard/detaills" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-6 items-center">
                        <div className=" text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                                
                        </div>
                        <div>
                            <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Detaills</p>
                        <p className="text-slate-400 text-sm hidden md:block">Edit Detaills</p>
                        </div>
                        
                    </div>
                </a>
            </div>
            <p className="text-sm text-center text-gray-600">v2.0.0.3 | &copy; 2022 Pantazi Soft</p>
        </div>

        </div>
    );
}































// / import { useState } from "react";


// export default function Sidebar() {
//     return (





































































































        
//         <div className="flex ">
//             <div
//                 className={` flex flex-col   h-screen p-8 bg-[#393533] shadow duration-300 w-60`}
//             >
//                 <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                         <h2 className="text-2xl font-bold text-white ">
//                             Dashboard
//                         </h2>
                        
//                     </div>
                    
//                     <div className="flex-1">
//                         <ul className="pt-2 pb-4 space-y-1 text-2xl">
//                             <li className="rounded-sm hover:bg-sky-500">
//                                 <a
//                                     href="/dashboard/cars"
//                                     className="flex items-center p-2 space-x-3 rounded-md"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-gray-100"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                                         />
//                                     </svg>
//                                     <span className="text-gray-100 ">Cars</span>
//                                 </a>
//                             </li>
//                             <li className="rounded-sm hover:bg-sky-500">
//                                 <a
//                                     href="/dasboard/detaills"
//                                     className="flex items-center p-2 space-x-3 rounded-md"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-gray-100"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
//                                         />
//                                     </svg>
//                                     <span className="text-gray-100">detaills</span>
//                                 </a>
//                             </li>
//                             <li className="rounded-sm hover:bg-sky-500">
//                                 <a
//                                     href="/dasboard/orders"
//                                     className="flex items-center p-2 space-x-3 rounded-md"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-gray-100"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//                                         />
//                                     </svg>
//                                     <span className="text-gray-100">
//                                         Orders
//                                     </span>
//                                 </a>
//                             </li>
//                             <li className="rounded-sm hover:bg-sky-500">
//                                 <a
//                                     href="/dasboard/Clients"
//                                     className="flex items-center p-2 space-x-3 rounded-md"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-gray-100"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                         />
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                         />
//                                     </svg>
//                                     <span className="text-gray-100">
//                                        Client    
//                                     </span>
//                                 </a>
//                             </li>
//                             <li className="rounded-sm hover:bg-sky-500">
//                                 <a
//                                     href="#"
//                                     className="flex items-center p-2 space-x-3 rounded-md"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-gray-100"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
//                                         />
//                                     </svg>
//                                     <span className="text-gray-100 hover:bg-sky-500">
//                                         Logout
//                                     </span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="">
//                 <div className="grid grid-cols-1  mb-6 lg:grid-cols-3">
                
//             </div>
//         </div>
//         </div>
//     );
// }



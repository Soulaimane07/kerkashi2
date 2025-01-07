import React from 'react'

function Navbar() {
  return (
        <nav className=" sticky top-0 z-50 bg-white text-gray-700 border-gray-200">
            <div className=" px-28 flex items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                </a>
                <ul className="font-medium flex items-center space-x-4"> 
                    <li>
                        <a href="#home" className="block py-2 px-3  hover:text-orange-500 transition-all">Home</a>
                    </li>
                    <li>
                        <a href="#convert" className="block py-2 px-3  hover:text-orange-500 transition-all">Convert</a>
                    </li>
                    <button type="button" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Login</button>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar
import React from 'react'

function Header() {
  return (
        <div id='home' class=" py-28 px-4 mx-auto max-w-screen-xl text-center ">
            <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900"> Files Convertor  JSON/XML</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#convert" class="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 ">
                    Get started
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
  )
}

export default Header
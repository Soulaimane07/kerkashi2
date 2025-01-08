import React from 'react'
import JSON from './JSON'
import XML from './XML'
import Converter from './Converter'

function Converter2() {
  return (
    <div id='convert' className=' py-28 mt-10 '>
        <div className='flex items-start justify-between space-x-20 '>
            <JSON />
            <XML />
        </div>
        <div class="inline-flex my-14 items-center justify-center w-full">
            <hr class="w-full h-px my-8 bg-gray-200 border-0"/>
            <span class=" px-3 font-medium text-gray-900 left-1/2">or</span>
            <hr class="w-full h-px my-8 bg-gray-200 border-0"/>
        </div>
        <Converter />
    </div>
  )
}

export default Converter2
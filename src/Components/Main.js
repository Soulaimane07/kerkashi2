import React from 'react';
import Header from './Main/Header';
import Converter from './Main/Converter';

function Main() {
  return (
    <div className='min-h-screen bg-zinc-50'>
      <div className='Header relative'>
        <div className=' absolute -bottom-0 bg-gradient-to-t from-zinc-50 to-transparent h-40 w-full'>
        </div>
      </div>

      <div className='bg-zinc-50 flex-1 mx-28 px-10 py-10 -top-72 relative min-h-screen left-0 p-4 rounded-lg'>
        <Header />
        <Converter />
      </div>
    </div>
  );
}

export default Main;

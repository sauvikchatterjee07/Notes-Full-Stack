import React, { useState } from 'react';

const NavBar = () => {

  return (
    <>
      <nav className='mb-10 text-center'>
        <h1 className='text-4xl font-semibold tracking-tight text-white mb-2 underline'>
          Task Manager
        </h1>
        
        <p className='text-gray-400'>Organize, Prioritize, Accomplish</p>
      </nav>
    </>
  );
};

export default NavBar;

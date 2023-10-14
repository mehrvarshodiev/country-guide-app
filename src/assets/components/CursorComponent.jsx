import React, { useEffect, useState } from 'react';

const CursorComponent = () => {
  return (
    <>
      <div className='cursor-dot pointer-events-none w-[5px] h-[5px] bg-cyan-500 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-[9999]'></div>
      <div className='cursor-outline pointer-events-none w-[35px] h-[35px] border-2 border-cyan-500 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-[9999]'></div>
    </>
  );
};

export default CursorComponent;

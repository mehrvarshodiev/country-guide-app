import React from 'react';

const CursorComponent = () => {
  return (
    <>
      {/* <div className='cursor-dot pointer-events-none w-[5px] h-[5px] bg-cyan-500 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-[9999]'></div> */}
      {/* <div className='cursor-outline pointer-events-none w-[35px] h-[35px] border-2 border-cyan-500 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-[9999]'></div> */}
      <div className='cursor-dot w-[20px] h-[20px] border border-solid border-[#ff8c00] rounded-[50%] pointer-events-none fixed z-[99999] hidden duration-[200ms] ease-out after:fixed after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[30px] after:h-[30px] after:border-[8px] after:border-solid after:border-[#d88724] after:rounded-[50%] after:opacity-[0.2]'></div>
    </>
  );
};

export default CursorComponent;

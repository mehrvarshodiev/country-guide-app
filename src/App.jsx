import React, { useEffect, useRef, useState } from 'react';
import SearchCountry from './assets/components/SearchCountry';
import CursorComponent from './assets/components/CursorComponent';
const App = () => {
  const [cursorDot, setCursorDot] = useState(null);
  const [cursorOutline, setCursorOutline] = useState(null);

  useEffect(() => {
    const dotEl = document.querySelector('.cursor-dot');
    const outlineEl = document.querySelector('.cursor-outline');
    setCursorDot(dotEl);
    setCursorOutline(outlineEl);

    return () => {
      setCursorDot(null);
      setCursorOutline(null);
    };
  }, []);

  {
    window.onmousemove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.display = `block`;
      // cursorOutline.style.display = `block`;

      cursorDot.style.left = `${posX - 10}px`;
      cursorDot.style.top = `${posY - 10}px`;

      // cursorOutline.style.left = `${posX}px`;
      // cursorOutline.style.top = `${posY}px`;
    };

    window.onmouseout = () => {
      cursorDot.style.display = `none`;
      // cursorOutline.style.display = `none`;
    };
    window.onclick = () => {
      cursorDot.classList.add('expand');

      setTimeout(() => cursorDot.classList.remove('expand'), 1000);
    };
  }

  return (
    <div className='container mx-auto max-w-[85%] h-[80vh] sm:max-w-[100%]'>
      <CursorComponent />
      <SearchCountry />
    </div>
  );
};

export default App;

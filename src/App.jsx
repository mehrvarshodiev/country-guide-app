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
      cursorOutline.style.display = `block`;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    };

    window.onmouseout = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      if (
        e.pageX < 0 ||
        e.pageX >= windowWidth ||
        e.pageY < 0 ||
        e.pageY > windowHeight
      ) {
        cursorDot.style.display = `none`;
        cursorOutline.style.display = `none`;
      } else {
        console.log('cursor-default');
        cursorDot.style.display = `block`;
        cursorOutline.style.display = `block`;
      }
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

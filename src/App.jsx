import React, { useEffect } from 'react';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mask = document.querySelector('.mask');
      const x = parseInt((e.clientX / window.innerWidth) * 100);
      const y = parseInt((e.clientY / window.innerHeight) * 100);
      const radius = Math.min(window.innerWidth, window.innerHeight) * 2; // Calculate the radius based on the smaller dimension and increase it
      mask.style.setProperty('--mouse-x', `${x}%`);
      mask.style.setProperty('--mouse-y', `${y}%`);
      mask.style.setProperty('--radius', `${radius}px`); // Set the radius dynamically
    };

    document.addEventListener('pointermove', handleMouseMove);

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="lg:mx-80  mt-32 mx-10">
        <Introduction/>
        <Projects />
      </main>
      <div className="hidden sm:block">
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black pointer-events-none mask"
          style={{
            '--mouse-x': '50%',
            '--mouse-y': '50%',
            '--radius': '200px',
            WebkitMask: `radial-gradient(circle var(--radius) at var(--mouse-x) var(--mouse-y), transparent 80px, black 350px)`,
            mask: `radial-gradient(circle var(--radius) at var(--mouse-x) var(--mouse-y), transparent 40px, black 150px)`,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;

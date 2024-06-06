import React, { useEffect, useRef } from 'react';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const refIntroduction = useRef(null);
  const refProjects = useRef(null);
  const refExperience = useRef(null);
  const contact = useRef(null)

  const handleScrollClick = (section) => {
    console.log(section)
    if (section === "projects") {
      refProjects.current?.scrollIntoView({ behavior: "smooth" })
    }
    else if (section === "introduction")
    {
      refIntroduction.current?.scrollIntoView({ behavior: "smooth" })
    }
    else if (section === "experience")
    {
      refExperience.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mask = document.querySelector('.mask');
      const x = parseInt((e.clientX / window.innerWidth) * 100);
      const y = parseInt((e.clientY / window.innerHeight) * 100);
      const radius = Math.min(window.innerWidth, window.innerHeight) * 2;
      mask.style.setProperty('--mouse-x', `${x}%`);
      mask.style.setProperty('--mouse-y', `${y}%`);
      mask.style.setProperty('--radius', `${radius}px`);
    };

    document.addEventListener('pointermove', handleMouseMove);

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header onClick={handleScrollClick} />
      <main className="lg:mx-80  mt-32 mx-10">
        <Introduction ref={refIntroduction} />
        <Experience ref={refExperience} />
        <Projects ref={refProjects} />
        <Contact />
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

import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import TypingTextList from './components/TypingTextList';
import Projects from './components/Projects';
import projects from './data/projects';
import skillSet from './data/skills';
import attr from './data/descriptors';
import './index.css';

function App() {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [navbarTop, setNavbarTop] = useState('10');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY > currentScrollY) {
        setNavbarTop('10');
      }
      else {
        setNavbarTop('-70')
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollY]);

  return (
    <div className="flex-col">
      <div id="navbar" className="navbar-grow fixed w-80 flex justify-end" style={{ top: `${navbarTop}px` }} >        
        <NavBar styles="w-full" />
      </div>

      <div id="body" className="body-grow max-w-full">
        <div id="header" className="min-h-36" >
          <h1 className="relative inline text-4xl py-2 text-seablue font-bold">
              Martin Gawron
          </h1>
          <TypingTextList texts={attr} typingSpeed={90} pauseTime={750} styles="indent-grow py-2" />
        </div>

        <div id="about-me" >
          <h2 id="about-me-title" className="text-3xl text-seablue font-bold" >About Me</h2>
          <p id="about-me-text" className="indent-grow py-2 text-lg" >
            I am a Computer Science and Software Engineering student at the University of Illinois at Chicago. I am currently a Developer Intern at The Cincinnati Insurance Companies (CIC) where I work with the Intelligent Automation team. I like to do Full Stack Development with a focus on making Web Applications. I am passionate about learning new technologies and building applications that solve real-world problems. I am always looking for new opportunities to grow and expand my skill set.
          </p>
          <Skills skillSet={skillSet} styles="mt-10" />
        </div>

        <div id="projects" className="my-12" >
          <h2 className="text-3xl text-seablue font-bold my-6" >Projects</h2>
          <Projects projectList={projects} />
        </div>
      </div>
    </div>
  );
};

export default App;

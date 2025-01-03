import NavBar from './components/NavBar'
import SkillsCard from './components/SkillsCard'
import TypingTextList from './components/TypingTextList'
import './index.css'

const attr = [
  "Dev Intern w/ Intelligent Automation @ The Cincinnati Insurance Companies",
  "Computer Science and Software Engineering @ UIC",
]

const skillSet = [
  "React", "Python", "Java", "HTML", "CSS", "JavaScript"
]

function App() {
  

  return (
    <div className="flex-col">
      <div id="navbar" className="navbar-grow fixed top-5 w-80 flex justify-end" >        
        <NavBar styles="w-full" />
      </div>
      <div id="body" className="body-grow max-w-full">
        <div id="header" className="min-h-36" >
          <h1 className="relative inline text-3xl py-2 text-vanillaberry font-bold">
              Martin Gawron
          </h1>
          <TypingTextList texts={attr} typingSpeed={90} pauseTime={750} styles="indent-grow py-2" />
        </div>
        <div id="about-me" >
          <h2 id="about-me-title" className="text-2xl text-vanillaberry font-bold" >About Me</h2>
          <p id="about-me-text" className="indent-grow py-2 text-lg" >
            I am a Computer Science and Software Engineering student at the University of Illinois at Chicago. I am currently a Developer Intern at The Cincinnati Insurance Companies (CIC) where I work with the Intelligent Automation team. I like to do Full Stack Development with a focus on making Web Applications. I am passionate about learning new technologies and building applications that solve real-world problems. I am always looking for new opportunities to grow and expand my skill set.
          </p>
          <SkillsCard skillSet={skillSet} styles="mt-10" />
        </div>
      </div>
    </div>
  )
}

export default App

import NavBar from './components/NavBar'
import TypingTextList from './components/TypingTextList'
import './index.css'

const attr = [
  "Developer Intern w/ Intelligent Automation @ CIC",
  "Computer Science and Software Engineering @ UIC",
  "Full Stack Developer",
  "Web Developer",
]

function App() {
  

  return (
    <div className="flex-col">
      <div id="navbar" className="navbar-grow fixed top-5 w-80 flex justify-end" >        
        <NavBar styles="w-full" />
      </div>
      <div id="body" className="body-grow max-w-full">
        <h1 className="relative inline text-3xl py-2 text-vanillaberry font-bold">
            Martin Gawron
        </h1>
        <TypingTextList texts={attr} styles="pt-2 pl-5" />
      </div>
    </div>
  )
}

export default App

import NavBar from './components/NavBar'
import './index.css'

function App() {
  

  return (
    <div class="flex-col">
      <div id="navbar" class="navbar-grow fixed top-5 w-80 flex justify-end" >        
        <NavBar styles="w-full" />
      </div>
      <div id="body" class="body-grow mx-auto mt-24">
        <h1 class="relative inline text-3xl py-2 text-vanillaberry font-bold">
            Martin Gawron
          </h1>
      </div>
    </div>
  )
}

export default App

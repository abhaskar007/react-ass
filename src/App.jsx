import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./style.css"
import Info from './Info'
import Footer from './Footer'
import Intrest from './Intrest'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='container-App'>
     <Info/>
     <About/>
     <Intrest/>
     <Footer />
    </div>
    </div>
  )
}

export default App


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import Protected from './components/Protected'
import Navbar from './components/Navbar'
import DepartMent from './components/DepartMent'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        
       <Route path='/' element={<Protected Components={Home}/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/department' element={<Protected Components={DepartMent}/>}/>

      </Routes>
    </Router>
  )
}

export default App

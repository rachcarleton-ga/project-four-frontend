import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Home from './components/Home'
import './App.css'

function App() {
  
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  return (

      <div className='App'>
       <Nav 
       user={user}
       handleLogOut={handleLogOut}
       />
       <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn setUser={setUser}/>}/>
          <Route path="/register" element={<Register />}/>
          <Route/>
        </Routes>
       </main>
      </div>
   
  )
}

export default App

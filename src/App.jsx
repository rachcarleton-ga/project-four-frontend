import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Arrived from './components/Arrived'
import Goal from './components/Goal'
import GoalForm from './components/GoalForm'
import ArrivedForm from './components/ArrivedForm'
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
          <Route path="/arrived" element={<Arrived />}/>
          <Route path="/goal" element={<Goal />}/>
          <Route path="/arrived/:id" element={<ArrivedForm/>}/>
          <Route path="/goal/:id" element={<GoalForm/>}/>
        </Routes>
       </main>
      </div>
   
  )
}

export default App

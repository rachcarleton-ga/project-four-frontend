import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Arrived from './components/Arrived'
import Goal from './components/Goal'
import GoalDetail from './components/GoalDetail'
import ArrivedDetail from './components/ArrivedDetail'
import Client from './services/api'
import Journal from './components/JournalForm'
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
    setUser(null)
    localStorage.clear()
  }

  const [arrived, setArrived] = useState(null);

  const getArrived = async () => {
      let res = await Client.get(`/arrived/`);
      setArrived(res.data);
  };
      
  useEffect(() => {
      getArrived();
  }, [])


  const [goal, setGoal] = useState(null);

  const getGoal = async () => {
      let res = await Client.get(`/goal/`);
      setGoal(res.data);
  };
      
  useEffect(() => {
      getGoal();
  }, [])


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
          <Route path="/arrived" element={<Arrived arrived={arrived} getArrived={getArrived} /> }/>
          <Route path="/goal" element={<Goal goal={goal} getGoal={getGoal}/>}/>
          <Route path="/arrived/:id" element={<ArrivedDetail arrived={arrived}/>}/>
          <Route path="/goal/:id" element={<GoalDetail goal={goal}/>}/>
        </Routes>
       </main>
      </div>
   
  )
}

export default App

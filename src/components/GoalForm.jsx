import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import Client from "../services/api"

const GoalForm = ({user, getGoal}) => {
  let navigate = useNavigate()
  
  const [newGoal, setNewGoal] = useState({
    user: user?.id,
    location: '',
    date: '',
    picture: '',
  })
console.log(user?.id)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post('/goal', newGoal)
    getGoal()
    navigate('/goal')

    setNewGoal({
      user: user?.id,
      location: '',
      date: '',
      picture: '',
    });
  }

  const handleChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value })
  }

  return (
    <div className="journal-form-container">
      <div className="journal-container">
        <div className="journal-card-overlay">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h3>Add A New Dream Destination</h3>
            <div className="input-wrapper">
              <input type="text" value={newGoal.location} onChange={handleChange} name='location' placeholder='location'/>
            </div>
            <div className="input-wrapper">
              <input type="text" value={newGoal.date} onChange={handleChange} name='date' placeholder='goal date'/>
            </div>
            <div className="input-wrapper">
              <input type="text" value={newGoal.picture} onChange={handleChange} name='picture' placeholder='picture'/>
            </div>
            <button className="signin-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GoalForm

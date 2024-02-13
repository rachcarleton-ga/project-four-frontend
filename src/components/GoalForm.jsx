
import { useNavigate } from "react-router-dom"
import { useState} from 'react'
import Client from "../services/api"

const GoalForm = (props) => {
  let navigate = useNavigate()

  const [newGoal, setNewGoal] = useState({
    location: '',
    date: '',
    picture: '',
  })
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    let res = await Client.post('/goal', newGoal)
    props.getGoal()
    navigate('/goal')
    
    setNewGoal({
        location: '',
        date: '',
        picture: '',
    });
  }

  const handleChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value })
  }

  return (
    <div>
    <h1>Add A New Dream Destination</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newGoal.location} onChange={handleChange} name='location' placeholder='location' />
      <input type="text" value={newGoal.date} onChange={ handleChange} name='date' placeholder='date' />
      <input type="text" value={newGoal.picture} onChange={handleChange} name='picture' placeholder= 'picture' />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default GoalForm


import { useNavigate } from "react-router-dom"
import { useState} from 'react'
import Client from "../services/api"

const ArrivedForm = (props) => {
  let navigate = useNavigate()

  const [newArrived, setNewArrived] = useState({
    location: '',
    date: '',
    picture: '',
  })
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    let res = await Client.post('/arrived', newArrived)
    props.getArrived()
    navigate('/arrived')
    
  }

  const handleChange = (e) => {
    setNewArrived({ ...newArrived, [e.target.name]: e.target.value })
  }

  return (
    <div>
    <h1>Add A New Explored Destination</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newArrived.location} onChange={handleChange} name='location' placeholder='location' />
      <input type="text" value={newArrived.date} onChange={ handleChange} name='date' placeholder='date' />
      <input type="text" value={newArrived.picture} onChange={handleChange} name='picture' placeholder= 'picture' />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default ArrivedForm


import { useNavigate } from "react-router-dom"
import { useState} from 'react'
import Client from "../services/api"

const DestinationForm = (props) => {
  let navigate = useNavigate()

  const [newDestination, setNewDestination] = useState({
    location: '',
    image: '',
    description: '',
  })
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    let res = await Client.post('/destinations', newDestination)
    props.getDestination()
    navigate('/destinations')
    
  }

  const handleChange = (e) => {
    setNewDestination({ ...newDestination, [e.target.name]: e.target.value })
  }

  return (
    <div>
    <h1>Add A New Destination</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newDestination.location} onChange={handleChange} name='location' placeholder='location' />
      <input type="text" value={newDestination.image} onChange={ handleChange} name='image' placeholder='image' />
      <input type="text" value={newDestination.description} onChange={handleChange} name='description' placeholder= 'description' />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default DestinationForm

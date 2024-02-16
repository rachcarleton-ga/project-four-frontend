import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import Client from "../services/api"

const ArrivedForm = (props) => {
  let navigate = useNavigate()

  const [newArrived, setNewArrived] = useState({
    location: '',
    date: '',
    picture: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post('/arrived', newArrived)
    props.getArrived()
    navigate('/arrived')

    setNewArrived({
      location: '',
      date: '',
      picture: '',
    });
  }

  const handleChange = (e) => {
    setNewArrived({ ...newArrived, [e.target.name]: e.target.value })
  }

  return (
    <div className="journal-form-container">
      <div className="journal-container">
        <div className="journal-card-overlay">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h3>Add A New Explored Destination</h3>
            <div className="input-wrapper">
              <input type="text" value={newArrived.location} onChange={handleChange} name='location' placeholder='location'/>
            </div>
            <div className="input-wrapper">
              <input type="text" value={newArrived.date} onChange={handleChange} name='date' placeholder='date'/>
            </div>
            <div className="input-wrapper">
              <input type="text" value={newArrived.picture} onChange={handleChange} name='picture' placeholder='picture'/>
            </div>
            <button className="signin-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ArrivedForm

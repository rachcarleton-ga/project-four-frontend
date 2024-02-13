import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState} from 'react'
import Client from "../services/api"


const JournalForm = (props) => {
    let navigate = useNavigate()
    
    const [newJournal, setNewJournal] = useState({
      picture: '',
      date: '',
      diary: '',
    })
    
    const handleSubmit = async(e) => {
      e.preventDefault()
      let res = await Client.post('/goal', newJournal)
      props.getJournal()
      navigate('/goal')
      
      setNewJournal({
          picture: '',
          date: '',
          diary: '',
      });
    }
    
    const handleChange = (e) => {
      setNewJournal({ ...newJournal, [e.target.name]: e.target.value })
    }

    return (
      <div>
      <h1>Add a new journal entry</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newJournal.picture} onChange={handleChange} name='picture' placeholder='picture' />
        <input type="text" value={newJournal.date} onChange={ handleChange} name='date' placeholder='date' />
        <input type="text" value={newJournal.diary} onChange={handleChange} name='diary' placeholder= 'diary' />
        <button type="submit">Submit</button>
      </form>
      </div>
    )

    
}
export default JournalForm







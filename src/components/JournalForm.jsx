import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useState } from 'react'
import Client from "../services/api"

const JournalForm = (props) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [newJournal, setNewJournal] = useState({
    picture: '',
    date: '',
    diary: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post(`/journal/arrived/${id}`, newJournal)
    props.getJournal()
    navigate(`/arrived/${id}`)

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
    <div className="journal-form-container">
      <div className="journal-container">
        <div className="journal-card-overlay">
          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <h2>Add a new journal entry</h2>
              <input type="text" value={newJournal.picture} onChange={handleChange} name='picture' placeholder='picture'/>
            </div>
            <div className="input-wrapper">
              <input type="text" value={newJournal.date} onChange={handleChange} name='date' placeholder='date'/>
            </div>
            <div className="input-wrapper">
              <input type="text" value={newJournal.diary} onChange={handleChange} name='diary' placeholder='diary'/>
            </div>
            <button className="signin-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )


}
export default JournalForm







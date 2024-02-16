import { useEffect, useState } from 'react'
import Client from '../services/api';
import { useParams } from 'react-router-dom';

const GoalJournal = ({journal, setEditTrigger}) => { 
    const [journalToBeEdited, setJournalToBeEdited] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [editedJournal, setEditedJournal] = useState({ date: "", diary: ""});
    const {id } = useParams();
    
    const getJournal = async () => {
        let res = await Client.get(`/journal/goal/${id}`);
        setJournalToBeEdited(res.data)
      };
  
    const handleDelete = async (journalId) => { 
        try {
            await Client.delete(`/journal/goal/${journalId}`);
            setEditTrigger(prev => prev + 1); 
        } catch (error) {
            console.error("Error deleting journal entry", error)
        }
    };

    const handleEdit = (journalId) => {
        try { 
            setEditMode((prevEditMode) => !prevEditMode)
            let edit = {
                picture: journal.picture,
                date: journal.date,
                diary: journal.diary,
            }
            setJournalToBeEdited( edit )
        } catch (error) {
            console.error("Error completing edit:", error)
        }
    };
    
    const handleChange = () => {
        setEditMode(true)
        setEditedJournal({
            date: journal.date,
            diary: journal.diary,
            picture: journal.picture,
        })
    }

    const handleSave = async (journalId) => {
        try {
            await Client.put(`/journal/goal/${journalId}`, {
                picture: journalToBeEdited.picture,
                date: journalToBeEdited.date,
                diary: journalToBeEdited.diary,
            })
            setEditMode(false);
            setEditTrigger(prev => prev + 1); 
        } catch (error) {
            console.error("Error updating journal entry", error)
        } 
    }

    return (
<div className="journal-entry-card">
    <img className="journal-image" src={journal.picture} />
    {journal.date}
    <br/>
    {journal.diary}
    <br />
          {editMode ? (
            <>
            <input
                type="text"
                value={journalToBeEdited.picture}
                onChange={(e) =>
                  setJournalToBeEdited({ ...journalToBeEdited, picture: e.target.value })
                }
              />
              <input
                type="text"
                value={journalToBeEdited.date}
                onChange={(e) =>
                  setJournalToBeEdited({ ...journalToBeEdited, date: e.target.value })
                }
              />
              <input
                type="text"
                value={journalToBeEdited.diary}
                onChange={(e) =>
                  setJournalToBeEdited({ ...journalToBeEdited, diary: e.target.value })
                }
              />
              <button className="signin-button" onClick={() => handleSave(journal._id)}>Save</button>
              <button className="signin-button" onClick={() => handleEdit(journal._id)}>Cancel</button>
            </>
          ) : (
        <>
          <button className="signin-button" onClick={() => handleEdit(journal._id)}>Edit</button>
          <button className="signin-button" onClick={() => handleDelete(journal._id)}>Delete</button>
        </>    
        )}
        </div>
  )
}

export default GoalJournal
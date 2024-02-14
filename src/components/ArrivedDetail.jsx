import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";
import JournalForm from "./JournalForm";

const ArrivedDetail = ({arrived}) => {
    const [arrive, setArrive] = useState(null);
    const [journal, setJournal] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editedJournal, setEditedJournal] = useState({ date: "", diary: ""});
    let {id} = useParams()

    const getArrive = async () => {
        try {
            let res = await Client.get(`/arrived/${id}`);
            setArrive(res.data);
        } catch (error) {
            console.error("Error fetching arrived data:", error)
        }
    };
    const getJournal = async () => {
      let res = await Client.get(`/journal/arrived/${id}`);
      setJournal(res.data)
    };
  
        
    useEffect(() => {
        getArrive();
        getJournal();
    }, [id])

    const handleDelete = async (journalId) => {
        try {
            await Client.delete(`/journal/${journalId}`);
            const updatedJournals = journal.arrivedJournal.filter(journal => journal._id !== journalId)
            setJournal({arrivedJournal: updatedJournals})
        } catch (error) {
            console.error("Error deleting journal entry", error)
        }
    };

    const handleEdit = (journalId) => {
        setEditMode(!editMode)
        if (editMode) {
            const selectedJournal = journal.arrivedJournal.find(
                (journal => journal._id === journalId);
        setEditedJournal({
            date: selectedJournal.date,
            diary: selectedJournal.diary,
        })
        } else {
            setEditedJournal({ date: "", diary: ""});
        }
    };

    const handleSave = async (journalId) => {
        try {
            await Client.put(`/journal/${journalId}`, {
                date: editedJournal.date,
                diary: editedJournal.diary,
            })
            setEditMode(false)
            getJournal()
        } catch (error) {
            console.error("Error updating journal entry", error)
        }
    }

    return arrive ? (
        <div>
            <h1>Details</h1>
            <div key={arrive.id} className='location-card'>
            <h2>{arrive.location}</h2>
            <h3>{arrive.date}</h3>
            <img className="location-image" 
            src={arrive.picture} 
            alt={arrive.location} />
            <br />
            <JournalForm getJournal={getJournal}/>
            {journal.arrivedJournal.map((journal) =>(
                <div key={journal.id}>
                    <img className="journal-image" src={journal.picture}/>
                    <p>{journal.date}</p>
                    {editMode ? (
                        <>
                        <input
                        type="text"
                        value={editedJournal.date}
                        onChange={(e) =>
                        setEditedJournal({ ...editedJournal, date: e.target.value})
                    }
                    />
                    <input 
                    type="text" 
                    value={editedJournal.diary}
                    onChange={(e) =>
                    setEditedJournal ({ ...editedJournal, diary: e.target.value})
                    }
                    />
                    </>
                    ) : (
                    <p>{journal.diary}</p>
                    )}
                    {editMode ? (
                        <>
                        <button onClick={() => handleSave(journal.id)}>Save</button>
                        <button onClick={() => handleEdit(journal.id)}>Cancel</button>
                        </>
                    ) : (
                        <>
                        <button onClick={() => handleEdit(journal.id)}>Edit</button>
                        <button onClick={() => handleDelete(journal.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
            </div>
        </div>
    ): null
}

export default ArrivedDetail
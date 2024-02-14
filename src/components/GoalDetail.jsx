import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";
import JournalForm from "./JournalForm";

const GoalDetail = ({ goal }) => {
    const [goals, setGoals] = useState(null);
    const [journal, setJournal] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editedJournal, setEditedJournal] = useState({ date: "", diary: "" });
    let { id } = useParams()

    const getGoals = async () => {
        try {
            let res = await Client.get(`/goal/${id}`);
            setGoals(res.data);
        } catch (error) {
            console.error("Error fetching goals data:", error)
        }
    };

    const getJournal = async () => {
        let res = await Client.get(`/journal/goal/${id}`);
        setJournal(res.data)
    };

    useEffect(() => {
        getGoals();
        getJournal();
    }, [id])

    const handleDelete = async (journalId) => {
        try {
            await Client.delete(`/journal/goal/${journalId}`);
            const updatedJournals = journal.goalJournal.filter(journal => journal._id !== journalId)
            setJournal({ goalJournal: updatedJournals })
        } catch (error) {
            console.error("Error deleting journal entry", error)
        }
    };

    const handleEdit = (journalId) => {
        setEditMode(!editMode)
        if (editMode) {
            const selectedJournal = journal.goalJournal.find(
                (journal => journal._id === journalId));
            console.log(selectedJournal)
            setEditedJournal({
                date: selectedJournal.date,
                diary: selectedJournal.diary,
            })
        } else {
            setEditedJournal({ date: "", diary: "" });
        }
    };

    const handleSave = async (journalId) => {
        try {
            await Client.put(`/goal/${journalId}`, {
                date: editedJournal.date,
                diary: editedJournal.diary,
            })
            setEditMode(false)
            getJournal()
        } catch (error) {
            console.error("Error updating journal entry", error)
        }
    }

    return goals ? (
        <div>
            <h1>Details</h1>
            <div key={goals.id} className='location-card'>
                <h2>{goals.location}</h2>
                <h3>{goals.date}</h3>
                <img className="location-image" src={goals.picture} alt={goals.location} />
                <br />
                <JournalForm getJournal={getJournal} />
                {journal?.goalJournal?.map((journal) => (
                    <div key={journal.id}>
                        <img className="journal-image" src={journal.picture} />
                        <p>{journal.date}</p>
                        {editMode ? (
                            <>
                                <input type="text" value={editedJournal.date} onChange={(e) =>
                                    setEditedJournal({ ...editedJournal, date: e.target.value })}
                                />+
                                <input type="text" value={editedJournal.diary} onChange={(e) =>
                                    setEditedJournal({ ...editedJournal, diary: e.target.value })}
                                />
                            </>
                        ) : (
                            <p>{journal.diary}</p>
                        )}
                        {editMode ? (
                            <>
                                <button onClick={() => handleSave(journal._id)}>Save</button>
                                <button onClick={() => handleEdit(journal._id)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => handleEdit(journal._id)}>Edit</button>
                                <button onClick={() => handleDelete(journal._id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    ) : null
}


export default GoalDetail
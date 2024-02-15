import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import JournalForm from "./JournalForm";
import GoalJournal from "./GoalJournal"

const GoalDetail = ({ goal }) => {
    const [goals, setGoals] = useState(null);
    const [journal, setJournal] = useState([]);
    let { id } = useParams()
    const navigate = useNavigate()
    const [editTrigger, setEditTrigger] = useState(0)

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

    const handleDelete = async () => {
         await Client.delete(`/goal/${id}`);
         setEditTrigger(prev => prev + 1); 
        return navigate('/goal')
    }

    useEffect(() => {
        getGoals();
        getJournal();
    }, [editTrigger])

    return goals ? (
        <div>
            <h1>Details</h1>
            <div key={goals.id} className='location-card'>
                <h2>{goals.location}</h2>
                <h3>{goals.date}</h3>
                <img className="location-image" src={goals.picture} alt={goals.location}/>
                <button onClick={handleDelete}>Delete Dream Destination</button>
                <br />
                <JournalForm getJournal={getJournal} />
                {journal.goalJournal ? (journal.goalJournal.map((journal) => (
                    <GoalJournal journal={journal} />
                ))): <p> No journal entries found</p> }
            </div>
        </div>
    ) : null;
};


export default GoalDetail
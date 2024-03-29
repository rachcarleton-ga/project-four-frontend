import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";
import JournalForm from "./JournalForm";
import ArrivedJournal from "./ArrivedJournal";

const ArrivedDetail = ({ arrived }) => {
    const [arrive, setArrive] = useState(null);
    const [journal, setJournal] = useState([]);
    let { id } = useParams()
    const [editTrigger, setEditTrigger] = useState(0);

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
    }, [editTrigger])

    return arrive ? (
        <div>
            <br />
            <h1>Welcome to the destinations you have already explored!</h1>
            <div key={arrive.id} className="location-card">
                <h2>{arrive.location}</h2>
                <h3>{arrive.date}</h3>
                <img className="location-image" src={arrive.picture} alt={arrive.location} />
                <br />
            </div>
            <JournalForm getJournal={getJournal} />
            {console.log(journal.arrivedJournal)}
            {journal.arrivedJournal ? (journal.arrivedJournal.map((journal) => (
                <ArrivedJournal setEditTrigger={setEditTrigger} journal={journal} />
            ))) : <p> No journal entries found</p>}
        </div>
    ) : null;
};

export default ArrivedDetail
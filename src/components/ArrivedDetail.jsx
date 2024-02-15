import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";
import JournalForm from "./JournalForm";
import ArrivedJournal from "./ArrivedJournal";


const ArrivedDetail = ({arrived}) => {
    const [arrive, setArrive] = useState(null);
    const [journal, setJournal] = useState([]);
    let { id } = useParams()

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

    return arrive ? (
        <div>
            <h1>Details</h1>
            <div key={arrive.id} className="location-card">
            <h2>{arrive.location}</h2>
            <h3>{arrive.date}</h3>
            <img className="location-image" src={arrive.picture} alt={arrive.location} />
            <br />
            <JournalForm getJournal={getJournal}/>
            {console.log(journal.arrivedJournal)}
            {journal.arrivedJournal ? (journal.arrivedJournal.map((journal)=>(
                <ArrivedJournal journal={journal} />
            ))): <p> No journal entries found</p> }
        </div>
        </div>
    ) : null;
};

export default ArrivedDetail
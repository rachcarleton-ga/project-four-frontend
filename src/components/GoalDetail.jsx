import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";

const GoalDetail = ({goal}) => {
    const [goals, setGoals] = useState(null);
    let {id} = useParams()

    const getGoals = async () => {
        try {
            let res = await Client.get(`/goal/${id}`);
            setGoals(res.data);
        } catch (error) {
            console.error("Error fetching arrived data:", error)
        }
    };
        
    useEffect(() => {
        getGoals();
    }, [goals, id])


    return goals ? (
        <div>
            <h1>Details</h1>

   
            <div key={goals.id} className='location-card'>
            <h2>{goals.location}</h2>
            <h3>{goals.date}</h3>
            <img className="location-image" src={goals.picture} alt={goals.location} />
            </div>
        </div>
    ): null
}

export default GoalDetail
import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";

const ArrivedDetail = () => {
    const [arrived, setArrived] = useState(null);
    let {id} = useParams()

    const getArrived = async () => {
        try {
            let res = await Client.get(`/arrived/${id}`);
            setArrived(res.data.arrived);
        } catch (error) {
            console.error("Error fetching arrived data:", error)
        }
    };
        
    useEffect(() => {
        getArrived();
    }, [arrive, id])


    return (
        <div>
            <h1>Details</h1>
            {arrived && arrived.length > 0 ? (
                arrived.map((arrive) => (
            <div key={arrive.id} className='location-card'>
            <h2>{arrive.location}</h2>
            <h3>{arrive.date}</h3>
            <img className="location-image" src={arrive.picture} alt={arrive.location} />
            </div>
            ))
        ) : (
            <p>No data available</p>
        )}
        </div>
    );
}

export default ArrivedDetail
import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";

const ArrivedDetail = ({arrived}) => {
    const [arrive, setArrive] = useState(null);
    let {id} = useParams()

    const getArrive = async () => {
        try {
            let res = await Client.get(`/arrived/${id}`);
            setArrive(res.data);
        } catch (error) {
            console.error("Error fetching arrived data:", error)
        }
    };
        
    useEffect(() => {
        getArrive();
    }, [arrived, id])


    return arrive ? (
        <div>
            <h1>Details</h1>

   
            <div key={arrive.id} className='location-card'>
            <h2>{arrive.location}</h2>
            <h3>{arrive.date}</h3>
            <img className="location-image" src={arrive.picture} alt={arrive.location} />
            </div>
        </div>
    ): null
}

export default ArrivedDetail
import { NavLink } from 'react-router-dom'
import ArrivedForm from './ArrivedForm'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Arrived = ({ arrived, getArrived }) => {
    const [editTrigger, setEditTrigger] = useState(0);

    const handleDelete = async (id) => {
        await Client.delete(`/arrived/${id}`);
        setEditTrigger(prev => prev + 1);
    }

    useEffect(() => {
        getArrived();
    }, [editTrigger])

    return (
        <div>
            <br />
            <h1>
                Welcome to the destinations you have already explored!
            </h1>
            <br />
            <ArrivedForm getArrived={getArrived} />
            {arrived && arrived.map(arrive => (
                <div className='location-card' key={arrive.id}>
                    <NavLink to={`${arrive._id}`}>
                        <h2>{arrive.location}</h2>
                        <br />
                        <h3>{arrive.date}</h3>
                        <br />
                        <img className="location-image" src={arrive.picture} alt={arrive.location} />
                    </NavLink>
                    <br />
                    <button className="signin-button" onClick={() => handleDelete(arrive._id)}>Delete Destination</button>
                </div>
            ))}
        </div>
    )
}

export default Arrived
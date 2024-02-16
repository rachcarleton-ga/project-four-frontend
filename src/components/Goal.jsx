import { NavLink } from 'react-router-dom'
import GoalForm from './GoalForm'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Goal = ({ goal, getGoal, user }) => {
    const [editTrigger, setEditTrigger] = useState(0);

    const handleDelete = async (id) => {
        await Client.delete(`/goal/${id}`);
        setEditTrigger(prev => prev + 1);
    }

    useEffect(() => {
        getGoal();
    }, [editTrigger])

    return (
        <div>
            <br />
            <h1>
                Welcome to your dream destinations!
            </h1>
            <br />
            <GoalForm getGoal={getGoal} user={user} />
            {goal && goal.map(goals => (
                <div className='location-card' key={goals.id}>
                    <NavLink to={`${goals._id}`}>
                        <h2>{goals.location}</h2>
                        <br />
                        <h3>{goals.date}</h3>
                        <br />
                        <img className="location-image" src={goals.picture} alt={goals.location} />
                    </NavLink>
                    <br />
                    <button className="signin-button" onClick={() => handleDelete(goals._id)}>Delete Destination</button>
                </div>
            ))}
        </div>
    )
}

export default Goal
import { NavLink } from 'react-router-dom'

import GoalForm from './GoalForm'

const Goal = ({goal, getGoal}) => {



    return (
        <div>
            <h3>
                Welcome to your dream destinations!
            </h3>
            <GoalForm getGoal={getGoal}/>
            { goal && goal.map(goals => (
                    <div className='location-card' key={goals.id}>
                    <NavLink to={`${goals._id}`}>
                    <h2>{goals.location}</h2>
                    <h3>{goals.date}</h3>
                    <img className="location-image" src={goals.picture} alt={goals.location} />
                    </NavLink>
                    </div>
                ))}
        </div>
    )
}

export default Goal
import { NavLink } from 'react-router-dom'

const Goal = ({goal}) => {

    return (
        <div className='destination-grid'>
            <h1>
                Dream Destinations:
            </h1>
            {goal.map(destination => (
                    <div className='destination-card' key={destination.id}>
                    <NavLink to={`${destination._id}`}>
                    <h2>{destination.location}</h2>
                    <h3>{destination.description}</h3>
                    <img className="destination-image" src={destination.image} alt={destination.location} />
                    </NavLink>
                    </div>
                ))}
        </div>
    )
}

export default Goal
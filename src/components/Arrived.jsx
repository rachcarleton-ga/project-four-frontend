import { NavLink } from 'react-router-dom'

import ArrivedForm from './ArrivedForm'

const Arrived = ({arrived, getArrived}) => {



    return (
        <div>
            <h3>
                Welcome to the destinations you have already explored!
            </h3>
            <ArrivedForm getArrived={getArrived}/>
            { arrived && arrived.map(arrive => (
                    <div className='location-card' key={arrive.id}>
                    <NavLink to={`${arrive._id}`}>
                    <h2>{arrive.location}</h2>
                    <h3>{arrive.date}</h3>
                    <img className="location-image" src={arrive.picture} alt={arrive.location} />
                    </NavLink>
                    </div>
                ))}
        </div>
    )
}

export default Arrived
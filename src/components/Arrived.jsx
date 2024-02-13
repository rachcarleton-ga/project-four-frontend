import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import ArrivedForm from './ArrivedForm'

const Arrived = (props) => {
    // let { id } =  useParams();
    // const [arrived, setArrived] = useState(null);

    // const getArrived = async () => {
    //     let res = await Client.get(`arrived/${id}`);
    //     setArrived(res.data);
    // };
        
    // useEffect(() => {
    //     getArrived();
    // }, (arrived, id))

    // const handleDelete = async (arrivedId, ArrivedFormId) => {
    //     if (window.confirm('Are you sure you want to delete this post?'))
    //         try {
    //             await Client. delete(`/arrived/${arrivedId}/arrivedForm/${arrivedFormId}`);
    //         } catch (error) {
    //             console.error('Error deleting post:', error);
    //         }
    // }

    // const handleUpdate = async () 

    return (
        <div>
            <h1>
                Welcome to the destinations you have already explored!
            </h1>
            {arrived.map(arrive => (
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
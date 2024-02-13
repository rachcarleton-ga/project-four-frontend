import { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams } from "react-router-dom";

const ArrivedDetail = () => {
    const [arrived, setArrived] = useState(null);
    let {id} = useParams()

    const getArrived = async () => {
        let res = await Client.get(`/arrived/${id}`);
        setArrived(res.data);
    };
        
    useEffect(() => {
        getArrived();
    }, [])

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
            Detail
        </div>
    )
}

export default ArrivedDetail
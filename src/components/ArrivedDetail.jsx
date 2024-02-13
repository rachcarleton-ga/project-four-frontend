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
    return (
        <div>
            Detail
        </div>
    )
}

export default ArrivedDetail
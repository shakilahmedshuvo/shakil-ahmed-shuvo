import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MyProjectInfo = () => {
    const param = useParams()
    const loader = useLoaderData()
    const [data, setData] = useState({})


    useEffect(() => {
        const singleData = loader.find(d => d.id == param.id)
        if (singleData) {
            setData(singleData)
        }
    }, [loader, param.id]);
    return (
        <div>
            {data.id}
        </div>
    );
};

export default MyProjectInfo;
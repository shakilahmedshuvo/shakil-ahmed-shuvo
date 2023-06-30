import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import MyProjectsCard from "./MyProjectsCard";

const MyProjects = () => {
    const [data, setData] = useState([]);

    // load the data
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div
            className="max-w-7xl mx-auto">
            <SectionTitle
                heading={"- My Project's -"}
            ></SectionTitle>
            {/* map the data */}
            <div>
                {
                    data.map(data => <MyProjectsCard
                        key={data.id}
                        data={data}
                    ></MyProjectsCard>)
                }
            </div>
        </div>
    );
};

export default MyProjects;
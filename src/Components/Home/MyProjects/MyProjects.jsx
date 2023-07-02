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
            id="projects"
            className="max-w-7xl mx-auto my-8">
            <SectionTitle
                heading={"- My Project's -"}
            ></SectionTitle>
            {/* map the data and grid section */}
            <div
                className="grid lg:grid-cols-3 my-10 gap-6 lg:px-0 px-5">
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
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyProjectsCard = ({ data }) => {
    const { name, shortInfo, img, liveLink, clientLink, serverLink, feature, techIcon, title } = data;

    return (
        <div
            className="border-2 rounded-lg">
            <div
                className="card-container mx-auto">
                <img
                    className="img-container"
                    src={img}
                    alt="" />
            </div>
            <h2
                className="text-center text-2xl font-bold relative bottom-6">
                {name}
            </h2>
            {/* link section */}
            <div>
                <h2
                    className="text-center text-base text-blue-500 font-bold relative bottom-3">
                    Important Link's :
                </h2>
                <div
                    className="px-2 grid grid-cols-3 font-bold text-center text-gray-700">
                    <Link
                        className="flex mx-auto">
                        Live Website<TbExternalLink className="text-2xl ms-1" />
                    </Link>
                    <Link
                        className="flex mx-auto">
                        Client Site <BsGithub className="text-xl ms-2" />
                    </Link>
                    <Link
                        className="flex mx-auto">
                        Server Site <BsGithub className="text-xl ms-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProjectsCard;
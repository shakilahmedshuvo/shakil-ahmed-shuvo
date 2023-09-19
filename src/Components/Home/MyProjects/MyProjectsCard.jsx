import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const MyProjectsCard = ({ data }) => {
    // const { name, shortInfo, img, liveLink, clientLink, serverLink, feature, techIcon, title } = data;
    const { id, name, img, liveLink, clientLink, serverLink } = data;

    return (
        <div
            data-aos="zoom-out-up"
            className="drop-shadow-md bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl">
            <div
                className="card-container mx-auto">
                <img
                    className="img-container px-0  rounded-lg"
                    src={img}
                    alt="" />
            </div>
            <h2
                className="text-center text-2xl lg:text-3xl font-bold relative bottom-6">
                {name}
            </h2>
            {/* link section */}
            <div
                className="my-6">
                <h2
                    className="text-center text-base text-blue-500 font-bold relative bottom-3">
                    Important Links :
                </h2>
                <div
                    className="px-2 grid lg:grid-cols-3 grid-cols-2 font-bold text-center text-gray-700">
                    <Link
                        to={liveLink}
                        className="flex mx-auto hover:text-blue-600 hover:bg-blue-100 py-2 rounded-lg lg:col-span-1 col-span-2">
                        Live Website<TbExternalLink className="text-2xl ms-1" />
                    </Link>
                    <Link
                        to={clientLink}
                        className="flex mx-auto hover:text-blue-600 hover:bg-blue-100 py-2 rounded-lg">
                        Client Site <BsGithub className="text-xl ms-2" />
                    </Link>
                    <Link
                        to={serverLink}
                        className="flex mx-auto hover:text-blue-600 hover:bg-blue-100 py-2 rounded-lg">
                        Server Site <BsGithub className="text-xl ms-2" />
                    </Link>
                </div>
                <div
                    className="px-2 mt-7 mb-3">
                    <Link
                        to={`cardInfo/${id}`}
                        className="btn w-[95%] mx-auto items-center bg-black text-white mb-4 flex justify-center hover:text-black">
                        View More Details <MdOutlineKeyboardDoubleArrowRight className="text-3xl" />
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default MyProjectsCard;
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const MyProjectsCard = ({ data }) => {
    const { name, shortInfo, img, liveLink, clientLink, serverLink, feature, techIcon, title } = data;

    return (
        <div
            className="border-2 rounded-lg">
            <div
                className="card-container mx-auto">
                <img
                    className="img-container lg:px-0 px-2"
                    src={img}
                    alt="" />
            </div>
            <h2
                className="text-center text-3xl font-bold relative bottom-6">
                {name}
            </h2>
            {/* link section */}
            <div
                className="my-4">
                <h2
                    className="text-center text-base text-blue-500 font-bold relative bottom-3">
                    Important Link's :
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
            </div>
            {/* modal section for cards */}
            <div className="px-2">
                <label
                    htmlFor="my_modal_6"
                    className="btn w-[100%] mx-auto items-center bg-blue-500 text-white hover:bg-blue-400 mb-4">
                    View More Details <MdOutlineKeyboardDoubleArrowRight className="text-3xl" />
                </label>
                <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle" />
                <div
                    className="modal">
                    <div
                        className="modal-box">
                        <h3
                            className="font-bold text-lg">
                            Hello!
                        </h3>
                        <p
                            className="py-4">
                            This modal works with a hidden checkbox!
                        </p>
                        <div
                            className="modal-action">
                            <label
                                htmlFor="my_modal_6"
                                className="btn">
                                Close!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjectsCard;
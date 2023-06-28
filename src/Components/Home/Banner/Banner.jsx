import { TbDownload } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {

    return (
        <div className="mt-24 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2">
                <div>
                    <div>
                        <h2>
                            Hi, I am Shakil Ahmed
                        </h2>
                        <p>
                            I am a junior web developer.Who can provide full service of web development, specializing in HTML, CSS ,JAVASCRIPT, BOOTSTRAP, TAILWIND CSS, REACT, NODE JS ,EXPRESS JS, FIREBASE & MONGO DB. Also build custom responsive websites for clients.
                        </p>
                        <div
                            className="flex justify-between">
                            <a
                                href="../../../../public/Resume of  Shakil Hossain jr developer.pdf"
                                className="flex btn btn-neutral lg:max-w-xs sm:max-w-full font-bold px-10">
                                <TbDownload className="text-3xl font-bold" /> Download Resume
                            </a>
                            {/* modal section start */}
                            <div>
                                <button
                                    className="btn btn-outline btn-wide font-bold"
                                    onClick={() => window.my_modal_1.showModal()}>
                                    <FaPhoneAlt className="text-xl font-bold" /> Contact
                                </button>
                                <dialog
                                    id="my_modal_1"
                                    className="modal">
                                    <form
                                        method="dialog"
                                        className="modal-box">
                                        <h3
                                            className="font-bold text-lg">
                                            Hello!
                                        </h3>
                                        <p
                                            className="py-4">
                                            Press ESC key or click the button below to close
                                        </p>
                                        <div
                                            className="modal-action">
                                            <button
                                                className="btn">
                                                Close
                                            </button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                        {/* modal section end */}
                    </div>
                </div>
                <div>
                    g
                </div>
            </div>
        </div >
    );
};

export default Banner;
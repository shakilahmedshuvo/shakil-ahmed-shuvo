import { TbDownload } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";

const Banner = () => {

    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="lg:mt-36">
                    <div className="p-2">
                        <h2
                            className="lg:text-5xl text-3xl font-bold">
                            Hi, I am <span
                                className="text-blue-500">
                                Shakil Ahmed
                            </span>
                        </h2>
                        <p
                            className="py-8 text-base font-medium">
                            I am a junior web developer.Who can provide full service of web development, specializing in HTML, CSS ,JAVASCRIPT, BOOTSTRAP, TAILWIND CSS, REACT, NODE JS ,EXPRESS JS, FIREBASE & MONGO DB. Also build custom responsive websites for clients.
                        </p>
                        <div
                            className="lg:block hidden">
                            <div
                                className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
                                <a
                                    href="../../../../public/Resume of  Shakil Hossain jr developer.pdf"
                                    className="flex btn bg-blue-500 text-white hover:bg-blue-400 h-full">
                                    <TbDownload className="text-3xl font-bold" /> Download Resume
                                </a>
                                {/* modal section start */}
                                <div>
                                    <button
                                        className="btn btn-outline border-2 border-blue-500 w-full text-blue-500 font-bold"
                                        onClick={() => window.my_modal_1.showModal()}>
                                        <FiPhone className="text-xl font-bold" /> Contact
                                    </button>
                                    <dialog
                                        id="my_modal_1"
                                        className="modal">
                                        <form
                                            method="dialog"
                                            className="modal-box">
                                            <h3
                                                className="font-bold text-2xl text-blue-500 text-center">
                                                Contact Info
                                            </h3>
                                            <p
                                                className="py-6 text-center font-bold">
                                                Email Adders :
                                                <br />
                                                Shakilahmedshuvo612@gmail.com
                                                <br />
                                                Phone :
                                                <br />
                                                +880 190299 1164
                                            </p>
                                            <span
                                                className="modal-action">
                                                <button
                                                    className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-400 mx-auto">
                                                    Close
                                                </button>
                                            </span>
                                        </form>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                        {/* modal section end */}
                    </div>
                </div>

                <div>
                    <img
                        className="rounded-lg"
                        src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?w=740&t=st=1687953702~exp=1687954302~hmac=2d0612b0b1da7ef90ae421365c4f5af604241978e7ba567ea5013eb9cc2fe9d7"
                        alt="" />
                </div>
                <div
                   className="block sm:hidden">
                    <div
                        className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 px-4">
                        <a
                            href="../../../../public/Resume of  Shakil Hossain jr developer.pdf"
                            className="flex btn bg-blue-500 text-white hover:bg-blue-400 h-full">
                            <TbDownload className="text-3xl font-bold" /> Download Resume
                        </a>
                        {/* modal section start */}
                        <div className="">
                            <button
                                className="btn btn-outline border-2 border-blue-500 w-full text-blue-500 font-bold"
                                onClick={() => window.my_modal_1.showModal()}>
                                <FiPhone className="text-xl font-bold" /> Contact
                            </button>
                            <dialog
                                id="my_modal_1"
                                className="modal">
                                <form
                                    method="dialog"
                                    className="modal-box">
                                    <h3
                                        className="font-bold text-2xl text-blue-500 text-center">
                                        Contact Info
                                    </h3>
                                    <p
                                        className="py-6 text-center font-bold">
                                        Email Adders :
                                        <br />
                                        Shakilahmedshuvo612@gmail.com
                                        <br />
                                        Phone :
                                        <br />
                                        +880 190299 1164
                                    </p>
                                    <span
                                        className="modal-action">
                                        <button
                                            className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-400 mx-auto">
                                            Close
                                        </button>
                                    </span>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
                {/* modal section end */}
            </div>
        </div>
    );
};

export default Banner;
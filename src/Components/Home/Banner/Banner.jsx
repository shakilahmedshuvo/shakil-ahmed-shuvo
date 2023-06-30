import { TbDownload } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import shakilPdf from '../../../../public/Resume-of-Shakil-Hossain-jr-developer.pdf';
import Lottie from 'react-lottie';
import Swal from "sweetalert2";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    // handleDownload function
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = shakilPdf;
        link.download = 'Resume-of-Shakil-Hossain-jr-developer.pdf';
        link.click();
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Shakil Ahmed Resume has been downloaded',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="lg:mt-36">
                    <div className="p-2">
                        <h2
                            className="lg:text-5xl text-3xl font-bold">
                            Hi, I am <span
                                className="text-blue-500">
                                {/* <Typewriter
                                    text="Shakil Ahmed"
                                    loop={true}
                                    cursor={false}
                                    speed={200}
                                ></Typewriter> */}
                                Shakil Ahmed
                                <span
                                    className="text-3xl font-normal relative top-3">
                                    &#174;
                                </span>
                            </span>
                        </h2>
                        <TypeAnimation
                            className="text-blue-500 my-4 font-bold"
                            sequence={[
                                'I am a Web Developer',
                                1000,
                                'I am a Front-end Developer',
                                1000,
                                'I am a React JS Developer',
                                1000,
                                'I am a MERN Stack Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity} />
                        <p
                            className="pt-2 pb-10 text-base font-medium">
                            I am a junior web developer. Who can provide full service of web development, specializing in HTML, CSS ,JAVASCRIPT, BOOTSTRAP, TAILWIND CSS, REACT, NODE JS ,EXPRESS JS, FIREBASE & MONGO DB. Also build custom responsive websites for clients.
                        </p>
                        <div
                            className="lg:block hidden">
                            <div
                                className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
                                {/* pdf download */}
                                <a
                                    onClick={handleDownload}
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

                <div
                    className="mx-auto">
                    <img
                        className="rounded-lg"
                        src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?w=740&t=st=1687953702~exp=1687954302~hmac=2d0612b0b1da7ef90ae421365c4f5af604241978e7ba567ea5013eb9cc2fe9d7"
                        alt="" />
                </div>
                <div
                    className="lg:hidden block">
                    <div
                        className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 px-4">
                        {/* pdf download */}
                        <a
                            onClick={handleDownload}
                            className="flex btn bg-blue-500 text-white hover:bg-blue-400 h-full">
                            <TbDownload className="text-3xl font-bold" /> Download Resume
                        </a>
                        <div className="">
                            <button
                                className="btn btn-outline border-2 border-blue-500 w-full text-blue-500 font-bold"
                                onClick={() => window.my_modal_2.showModal()}>
                                <FiPhone className="text-xl font-bold" /> Contact
                            </button>
                            <dialog
                                id="my_modal_2"
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
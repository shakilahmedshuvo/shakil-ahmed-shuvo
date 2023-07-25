import { useRef } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TbExternalLink } from "react-icons/tb";
import { BiSend } from "react-icons/bi";
import Lottie from "lottie-react";
import contactAnimation from "../../../assets/contact.json";

const Contact = () => {
    const form = useRef();

    // sendEmail function
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qqwd2hf',
            'template_39elj6s',
            form.current,
            'SRnTAkpey90_X63NF')
            .then((result) => {
                console.log(result.text);

                // success swal
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Email Has Been Send',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
                (error) => {
                    console.log(error.text);
                });
    };

    return (
        <div
            id="contact"
            className="max-w-7xl mx-auto my-12 lg:p-4">
            <SectionTitle
                heading={"- Contact Me -"}
            ></SectionTitle>
            <div
                className="grid lg:grid-cols-2 mt-10 mb-2">
                <div>
                    <h2
                        className="text-2xl font-bold lg:text-left text-center">
                        - Social Links -
                    </h2>
                    {/* contact section */}
                    <div
                        data-aos="zoom-out"
                        className="mt-6 pb-6 lg:px-2 px-5">
                        {/* email */}
                        <p
                            className="lg:flex items-center mb-4">
                            <svg
                                className="lg:mx-3 mx-auto"
                                xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 193">
                                <path
                                    fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" />
                                <path
                                    fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z" />
                                <path
                                    fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" />
                                <path
                                    fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" />
                                <path
                                    fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" />
                            </svg>
                            <p
                                className="font-bold lg:ms-0 lg:text-start text-center lg:my-2 my-8">
                                Shakilahmedshuvo612@gmail.com
                            </p>
                        </p>
                        <div
                            className="grid lg:grid-cols-2">
                            <p
                                data-aos="zoom-out"
                                className="lg:flex items-center mb-4 text-center">
                                <svg
                                    className="lg:mx-3 mx-auto lg:mb-0 mb-3"
                                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                                    <path
                                        fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
                                    <path
                                        fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" />
                                </svg>
                                <Link
                                    to="https://www.facebook.com/iamshakilahmedshuvo/"
                                    className="font-bold hover:text-blue-500 hover:bg-blue-200 py-1 px-2 lg:mx-0 mt-2 rounded-lg">
                                    <span
                                        className="flex items-center justify-center">
                                        Shakil Ahmed <TbExternalLink className="text-xl ms-1" />
                                    </span>
                                </Link>
                            </p>
                            <p
                                data-aos="zoom-out"
                                className="lg:flex items-center text-center">
                                <svg
                                    className="lg:mx-3 mx-auto lg:mb-0 mb-3"
                                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128">
                                    <g
                                        fill="#181616">
                                        <path
                                            fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd" />
                                        <path
                                            d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0" />
                                    </g>
                                </svg>
                                <Link
                                    to="https://github.com/shakilahmedshuvo"
                                    className="font-bold hover:text-blue-500 hover:bg-blue-200 py-1 px-2 rounded-lg">
                                    <span
                                        className="flex items-center justify-center">
                                        Shakil Ahmed <TbExternalLink className="text-xl ms-1" />
                                    </span>
                                </Link>
                            </p>
                        </div>
                        {/* contact animation section start */}
                        <div
                            data-aos="flip-right"
                            className="lg:mt-20 lg:mr-14 mx-auto">
                            <Lottie
                                animationData={contactAnimation}
                                loop={true}
                            ></Lottie>
                        </div>
                        {/* contact animation section end */}
                    </div>
                </div>
                <div>
                    <h2
                        className="text-2xl font-bold my-1 lg:text-left text-center">
                        - Send Email -
                    </h2>
                    {/* form section start */}
                    <div
                        data-aos="zoom-in"
                        className="mx-auto">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="w-[100%] shadow-2xl font-bold mx-auto">
                            <div className="card-body mx-auto">
                                <div
                                    className="form-control">
                                    {/* name */}
                                    <label
                                        className="label">
                                        <span
                                            className="label-text">
                                            * Enter Your Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        className="input input-bordered"
                                        required />
                                    {/* email */}
                                    <label
                                        className="label">
                                        <span
                                            className="label-text">
                                            * Enter Your Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Your Email"
                                        className="input input-bordered"
                                        required />
                                    {/* Message */}
                                    <label
                                        className="label">
                                        <span
                                            className="label-text">
                                            * Enter Your Message
                                        </span>
                                    </label>
                                    <textarea
                                        name="message"
                                        className="textarea textarea-warning" placeholder="Your Message"
                                        required />
                                </div>

                            </div>
                            {/* input btn */}
                            <div
                                type="submit"
                                className="btn px-20 ms-8 mb-6 bg-gradient-to-r from-blue-300 from-10% via-30% to-purple-200 to-90%  hover:bg-blue-400 lg:w-[90%] w-[80%] text-slate-800">
                                Send Email<BiSend className="text-xl flex items-center justify-center mr-1" />
                            </div>
                        </form>
                        {/* form section end */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;
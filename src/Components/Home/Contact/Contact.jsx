import { useRef } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
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
                    {/* contact section */}
                    <div
                        data-aos="zoom-out"
                        className="mt-6 pb-6 lg:px-2 px-5 flex items-center justify-center">
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
                        className="text-2xl font-bold my-1 lg:text-left flex items-center justify-center">
                        - Send Email -
                    </h2>
                    {/* form section start */}
                    <div
                        data-aos="zoom-in"
                        className="mx-auto">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="w-[100%] shadow-2xl font-bold mx-auto rounded-xl">
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
                                className="btn px-20 ms-8 mb-6 bg-black lg:w-[90%] w-[80%] text-white hover:text-black">
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
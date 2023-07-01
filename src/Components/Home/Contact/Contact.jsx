import { useRef } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    // sendEmail function
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qqwd2hf', 'template_39elj6s', form.current, 'SRnTAkpey90_X63NF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div
            className="max-w-7xl mx-auto my-5">
            <SectionTitle
                heading={"- Contact -"}
            ></SectionTitle>
            <div>
                <form
                    ref={form}
                    onSubmit={sendEmail}>
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name" />
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email" />
                    <label>
                        Message
                    </label>
                    <textarea
                        name="message" />
                    <input
                        type="submit"
                        value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
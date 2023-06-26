import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div
            className="bg-slate-800">
            <div
                className="text-center text-white max-w-7xl mx-auto pt-10">
                <h2
                    className="text-3xl font-bold">
                    Social Media Links
                </h2>
                {/* Social Media Links section start */}
                <div
                    className="flex max-w-xl mx-auto text-4xl py-8">
                    <Link
                        className="ms-auto"
                        to="https://www.facebook.com/iamshakilahmedshuvo">
                        <FaFacebookSquare />
                    </Link>
                    <Link
                        className="mx-auto"
                        to="https://www.facebook.com/iamshakilahmedshuvo">
                        <FaGithub />
                    </Link>
                    <Link
                        className="me-auto"
                        to="https://www.facebook.com/iamshakilahmedshuvo">
                        <FaLinkedin />
                    </Link>
                </div>
                {/* Social Media Links section end */}
            </div>
            <div
                className="text-center bg-neutral-800 text-white py-4 font-bold">
                <small>
                    Copyright © 2023 - Shakil Ahmed Shuvo All rights reserved.
                </small>
            </div>
        </div >
    );
};

export default Footer;
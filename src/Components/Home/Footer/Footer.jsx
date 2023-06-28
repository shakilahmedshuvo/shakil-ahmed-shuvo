import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <div
                className="text-center max-w-7xl mx-auto pt-8">
                <h2
                    className="text-3xl font-bold">
                    Social Media Links
                </h2>
                <div
                    className="pt-5 pb-6">
                    <hr className="w-[40%] mx-auto" />
                </div>
                {/* Social Media Links section start */}
                <div
                    className="flex max-w-xl mx-auto text-3xl pb-8">
                    <Link
                        className="ms-auto"
                        to="https://www.facebook.com/iamshakilahmedshuvo">
                        <FaFacebookSquare />
                    </Link>
                    <Link
                        className="mx-auto"
                        to="https://github.com/shakilahmedshuvo">
                        <FaGithub />
                    </Link>
                    <Link
                        className="me-auto"
                        to="https://www.linkedin.com/in/shakil-ahmed-408391271/">
                        <FaLinkedin />
                    </Link>
                </div>
                {/* Social Media Links section end */}
            </div>
            <div
                className="text-center bg-yellow-400 py-4 font-bold">
                <small>
                    Copyright © 2023 - Shakil Ahmed Shuvo All rights reserved.
                </small>
            </div>
        </div >
    );
};

export default Footer;
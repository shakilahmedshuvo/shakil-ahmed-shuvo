import SectionTitle from "../../Shared/SectionTitle";
import shakilImg from "../../../assets/shakil.jpg";
import FacebookIcon from "./Icons/FacebookIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import MailIcon from "../../../assets/mail.svg";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div
            id="about"
            className="max-w-7xl mx-auto mt-8">
            <SectionTitle
                heading={"- About Me -"}
            ></SectionTitle>

            <h2 className="text-center text-sm mt-10 mb-4 text-gray-700">
                Hi , I am Shakil Ahmed. I am a professional Web Developer. I can create professional web application
                with MERN stack & I can also create awesome &
                <br />
                creative front-end web site with REACT JS, React JS, Node JS, MongoDB & Express JS is my Hobby.
            </h2>

            <div
                className="grid lg:grid-cols-2">
                <div>

                    <div className="flex items-center justify-center mt-8">
                        <h2 className="text-center border-b-4 w-fit border-blue-400 text-2xl px-5">
                            Here I am
                        </h2>
                    </div>

                    <img
                        // TODO
                        // data-aos="zoom-out"
                        className="mx-auto w-[40%] lg:w-[50%] rounded-full border-4 border-yellow-300 lg:mt-12 mt-10"
                        src={shakilImg}
                        alt="" />

                    <div>
                        <h2 className="font-black text-2xl text-center mt-5">
                            Shakil Ahmed
                        </h2>

                        <div className="grid grid-cols-4 mx-44 mt-5">
                            <Link to={"https://www.facebook.com/iamshakilahmedshuvo"}>
                                <FacebookIcon />
                            </Link>

                            <Link to={"https://github.com/shakilahmedshuvo"}>
                                <GitHubIcon />
                            </Link>

                            <Link to={"https://www.linkedin.com/in/shakil-ahmed-408391271/"}>
                                <LinkedinIcon />
                            </Link>

                            <a href="mailto:shakilahmedshuvo612@gmail.com">
                                <img
                                    width="45"
                                    src={MailIcon}
                                    alt="" />
                            </a>
                        </div>
                    </div>

                </div>
                <div
                    className="lg:text-start text-center">

                    <div className="flex items-center justify-center mt-8">
                        <h2 className="text-center border-b-4 w-fit border-blue-400 text-2xl px-5">
                            Skills
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
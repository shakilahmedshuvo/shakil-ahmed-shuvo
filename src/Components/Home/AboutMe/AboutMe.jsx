import SectionTitle from "../../Shared/SectionTitle";
import shakilImg from "../../../assets/shakil.jpg";
import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";
import FacebookIcon from "./Icons/FacebookIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import GmailIcon from "./Icons/GmailIcon";

const AboutMe = () => {
    return (
        <div
            id="about"
            className="max-w-7xl mx-auto mt-8">
            <SectionTitle
                heading={"- About Me -"}
            ></SectionTitle>
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

                        <div>
                            <FacebookIcon />
                            <GitHubIcon />
                            <LinkedinIcon />
                            <GmailIcon />
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
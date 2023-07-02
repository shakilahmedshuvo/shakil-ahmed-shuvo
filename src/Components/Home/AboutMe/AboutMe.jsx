import SectionTitle from "../../Shared/SectionTitle";
import shakilImg from "../../../assets/shakil.jpg";

const AboutMe = () => {
    return (
        <div
            id="about"
            className="max-w-7xl mx-auto mt-8">
            <SectionTitle
                heading={"- About Me -"}
            ></SectionTitle>
            <div className="grid lg:grid-cols-2">
                <div>
                    <img
                        className="mx-auto w-[60%] rounded-full border-4 border-yellow-300 mt-16"
                        src={shakilImg}
                        alt="" />
                </div>
                <div className="my-10 grid lg:text-start text-center gap-4">
                    <div
                        className="rounded-2xl py-4 px-2">
                        <p
                            className="text-gray-600 my-2" >
                            Name :
                        </p>
                        <h2
                            className="font-bold">
                            Shakil Ahmed
                        </h2>
                    </div>
                    <div
                        className="rounded-2xl py-4 px-2">
                        <p
                            className="text-gray-600 my-2" >
                            From :
                        </p>
                        <h2
                            className="font-bold">
                            Dhaka, Bangladesh
                        </h2>
                    </div>
                    <div
                        className="rounded-2xl py-4 px-2">
                        <p
                            className="text-gray-600 my-2" >
                            Email :
                        </p>
                        <h2
                            className="font-bold">
                            Shakilahmedshuvo612@gmail.com
                        </h2>
                    </div>
                    <div
                        className="rounded-2xl py-4 px-2">
                        <p
                            className="text-gray-600 my-2" >
                            Phone Number :
                        </p>
                        <h2
                            className="font-bold">
                            +880 1902 991164
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
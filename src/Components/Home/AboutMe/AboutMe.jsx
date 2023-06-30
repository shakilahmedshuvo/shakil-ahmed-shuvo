import SectionTitle from "../../Shared/SectionTitle";

const AboutMe = () => {
    return (
        <div
            className="max-w-7xl mx-auto mt-5">
            <SectionTitle
                heading={"- About Me -"}
            ></SectionTitle>
            <div className="grid lg:grid-cols-2">
                <div>
                    <img
                        src="https://images01.nicepagecdn.com/page/87/49/website-design-preview-874931.jpg"
                        alt="" />
                </div>
                <div className="my-10 grid text-center gap-4">
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
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
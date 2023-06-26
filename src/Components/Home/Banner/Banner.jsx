import { TbDownload } from "react-icons/tb";

const Banner = () => {
    return (
        <div>
            <h2>
                this is Banner
            </h2>
            <a
                href="../../../../public/Resume of  Shakil Hossain jr developer.pdf"
                className="flex btn btn-warning lg:max-w-xs sm:max-w-full">
                <TbDownload className="text-3xl font-bold" /> Download Resume
            </a>
        </div>
    );
};

export default Banner;
import { Link, useRouteError } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <>
            <NavBar />
            <div className='text-center'>
                <div className='lg:w-[50%] sm:w-full mx-auto'>
                    <img
                        className='mx-auto lg:w-[100%] sm:w-[100%] rounded-lg pt-6'
                        src="https://img.freepik.com/premium-vector/error-404-banner-vector-illustration_18591-530.jpg?w=996"
                        alt="" />
                </div>
                {/* <h2
                    className='font-extrabold text-5xl'>
                    <span
                        className='text-error'>
                        Error
                    </span> {status || 404}
                </h2> */}
                <p
                    className='font-bold text-xl py-2'>
                    {error?.message}
                </p>
                <p 
                className="py-2">
                    <Link
                        to='/'
                        className='no-underline font-extrabold btn btn-warning rounded-lg btn-wide '>
                        Back To Home
                    </Link>
                </p>
            </div>
            <Footer />
        </>
    );
};
export default ErrorPage;
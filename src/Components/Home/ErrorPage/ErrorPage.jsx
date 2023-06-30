import { Link, useRouteError } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <>
            <NavBar />
            <div className='text-center pt-3'>
                <div className='lg:w-[50%] sm:w-full mx-auto'>
                    <img
                        className='mx-auto lg:w-[60%] sm:w-[100%] rounded-lg pt-6'
                        src="https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740"
                        alt="404 page not found" />
                </div>
                <p
                    className='font-bold text-xl py-2'>
                    {error?.message}
                </p>
                <p 
                className="py-4">
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
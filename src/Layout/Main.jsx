import { Outlet } from "react-router-dom";
import NavBar from "../Components/Home/NavBar/NavBar";
import Footer from "../Components/Home/Footer/Footer";

const Main = () => {
    return (
        <div className="overflow-hidden">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
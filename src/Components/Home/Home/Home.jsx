import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <MyProjects />
        </div>
    );
};

export default Home;
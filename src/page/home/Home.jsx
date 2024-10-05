import AboutUsSection from "../../component/AboutUsSection";
import Banner from "../../component/Banner";
import Contact from "../../component/Contact";
import ImageSection from "../../component/ImageSection";
import WorkIt from "../../component/WorkIt";

const Home = () => {
    return (
        <div>
            <Banner />
            <WorkIt />
            <ImageSection />
            <Contact/>
            <AboutUsSection/>
        </div>
    );
};

export default Home;
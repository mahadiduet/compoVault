import { Outlet } from "react-router-dom";
import Navbar from "../component/share/Navbar";
import Footer from "../component/share/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
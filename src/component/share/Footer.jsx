import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* Address Section */}
                <div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Our Address</h3>
                    <p className="text-lg">
                        123 CompuVault St.<br />
                        Tech City, BD 12345
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Contact Us</h3>
                    <p className="text-lg">
                        Email: <Link to="mailto:support@compuvault.com" className="underline text-red-400">support@compuvault.com</Link><br />
                        Phone: <Link to="tel:+1234567890" className="underline text-red-400">+880-1723-000000</Link>
                    </p>
                </div>

                {/* Social Links Section */}
                <div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Follow Us</h3>
                    <ul className="flex space-x-4 text-2xl">
                        <li>
                            <Link to='' className="hover:text-red-400" aria-label="Facebook">
                                <BsFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link to='' className="hover:text-red-400" aria-label="Facebook">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to='' className="hover:text-red-400" aria-label="Facebook">
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm mt-8 text-gray-400">
                © {new Date().getFullYear()} CompuVault. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
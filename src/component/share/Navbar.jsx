import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import logo from "./../../../public/images/Logo.png"
import profile from "./../../../public/images/Profile.png"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const profileImage = user?.photoURL;
    console.log('Login User:', user);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const menu = <>
        <li><Link className="text-xl" to='/'>Home</Link></li>
        <li><Link className="text-xl" to='/products'>Products</Link></li>
    </>
    return (
        <div className="navbar bg-blue-900 text-white">
            <div className="navbar-start">
                <div className="dropdown bg-blue-900">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm bg-blue-900 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl font-extrabold">
                    <img className="w-12 h-12 rounded-full" src={logo} alt="CompoVault" />
                    Compo<span className="text-red-900">Vault</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end space-x-4 ">
                {!user ?
                    <>
                        <button className="btn bg-green-200 text-red-900 font-bold"><Link to="/signin">Sign In</Link></button>
                        <button className="btn bg-green-200 text-red-900 font-bold"><Link to="/signup">Sign Up</Link></button>
                    </>
                    :
                    <>
                        <div>
                            <div className="relative inline-block text-left">
                                <div onClick={toggleDropdown} className="cursor-pointer">
                                    {
                                        profileImage ?
                                            <><img
                                                src={profileImage}
                                                alt="Profile"
                                                className="w-12 h-12 rounded-full border-2 border-gray-300"
                                            /></>
                                            :
                                            <><img
                                                src={profile}
                                                alt="Profile"
                                                className="w-12 h-12 rounded-full border-2 border-gray-300"
                                            /></>
                                    }
                                </div>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                        <div className="py-1">
                                            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                {user?.displayName}
                                            </Link>
                                            <Link onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>}

            </div>
        </div>
    );
};

export default Navbar;
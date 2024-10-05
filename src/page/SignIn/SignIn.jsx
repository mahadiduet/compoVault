import { Link, useLocation, useNavigate } from "react-router-dom";
import signupimage from "./../../../public/images/signin.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const existLocation = location?.state || '/';
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(existLocation);
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                navigate(existLocation);
                console.log('Google User:', user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                navigate(existLocation);
                console.log('GitHub User:', user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-300">
            {/* Container for Image and Form */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
                {/* Image Column */}
                <div className="md:flex md:w-1/2 items-center justify-center">
                    <img
                        src={signupimage}
                        alt="Signup"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Form Column */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-3xl font-bold text-center text-red-900 mb-6">Sign In</h2>
                        <form onSubmit={handleLogin} className="w-full">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        {/* Dotted line and Sign Up text */}
                        <div className="my-6">
                            <div className="border-b border-dotted border-gray-300 mb-2"></div>
                            <p className="text-center text-gray-700">
                                New at Shop? <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
                            </p>
                        </div>
                        {/* Dotted line and Sign Up by Google, Github text */}
                        <div className="my-6">
                            <div className="border-b border-dotted border-gray-300 mb-2"></div>
                            <p className="text-center space-x-5 text-2xl text-gray-700 flex">
                                <p className="text-xl">Sign In with:</p>
                                <button onClick={handleGoogleLogin}><FcGoogle /></button>
                                <button onClick={handleGithubLogin}><FaGithub /></button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
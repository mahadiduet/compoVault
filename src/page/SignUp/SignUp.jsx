import { Link } from "react-router-dom";
import signupimage from "./../../../public/images/sign-up.avif";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const fromData = e.target;
        const name = fromData.name.value;
        const email = fromData.email.value;
        const photoUrl = fromData.image.value;
        const password = fromData.password.value;
        // const data = { name, email, image, password };
        // console.log(data);
        createUser(email, password)
            .then(result => {
                updateUser(name, photoUrl)
                    .then((updateUser) => {
                        console.log('Update User:',updateUser)
                    }).catch((error) => {
                        console.log(error);
                    });
            })
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
                        <h2 className="text-3xl font-bold text-center text-red-900 mb-6">Sign Up</h2>
                        <form className="w-full" onSubmit={handleSignUp}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div> */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                                    Image URL
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="tel"
                                    id="image"
                                    name="image"
                                    placeholder="Enter your image url"

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
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="my-6">
                            <div className="border-b border-dotted border-gray-300 mb-2"></div>
                            <p className="text-center text-gray-700">
                                Already registered? <Link to="/signin" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

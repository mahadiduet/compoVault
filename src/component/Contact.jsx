const Contact = () => {
    return (
        <div className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 py-12">
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-black via-green-500 to-blue-900 shadow-2xl rounded-lg p-10">
                <div>
                    <h2 className="text-4xl font-bold text-center text-white mb-10">Contact Us</h2>
                    <p className="text-gray-500 text-center mb-8 w-1/2 mx-auto">Get in touch with us for any queries or support, we are here to help you.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info Column */}
                    <div className="bg-opacity-80 p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#4caf50' }}>
                        <h3 className="text-3xl font-semibold text-red-900 mb-6">Our Contact Information</h3>
                        <p className="text-lg text-red-900 mb-4">
                            <strong>Email:</strong> support@compuvault.com
                        </p>
                        <p className="text-lg text-red-900 mb-8">
                            <strong>Phone:</strong> +8801700000000
                        </p>
                        <div className="mt-4">
                            <h4 className="text-2xl font-semibold text-red-900">Address:</h4>
                            <p className="text-lg text-red-900">1234 Computer Lane, Tech City, Dhaka</p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-white text-lg font-semibold mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    className="w-full bg-gray-300 px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600"
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-white text-lg font-semibold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="w-full bg-gray-300 px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-white text-lg font-semibold mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    className="w-full bg-gray-300 px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600"
                                    id="message"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    className="bg-red-700 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 hover:shadow-xl transition duration-300"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

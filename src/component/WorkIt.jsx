
const WorkIt = () => {
    return (
        <div className="py-8 bg-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-900 mb-2">Guidelines</h2>
                    <p className="text-gray-500 text-center mb-8 w-1/2 mx-auto">Simply browse, select, and enjoy seamless experiences with our intuitive platform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                        <h3 className="text-2xl font-semibold text-red-900 mb-4">1. Browse Products</h3>
                        <p className="text-gray-600">
                            Explore our wide range of computer devices, including laptops, desktops, monitors, and accessories.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                        <h3 className="text-2xl font-semibold text-red-900 mb-4">2. Add to Cart</h3>
                        <p className="text-gray-600">
                            Select your preferred products and easily add them to your shopping cart with just a click.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                        <h3 className="text-2xl font-semibold text-red-900 mb-4">3. Checkout & Purchase</h3>
                        <p className="text-gray-600">
                            Proceed to the secure checkout to complete your purchase and get your products delivered.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WorkIt;
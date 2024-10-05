import img1 from "./../../public/images/Laptop.jpeg";
import img2 from "./../../public/images/monitor.avif";
import img3 from "./../../public/images/desktop.jpg";
import img4 from "./../../public/images/Keyboard.jpeg";
import img5 from "./../../public/images/mouse.jpeg";
import img6 from "./../../public/images/headphone.avif";
const ImageSection = () => {
    return (
        <div className="py-12 bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-900 mb-8">Our Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Product Image 1 */}
                    <div className="relative group">
                        <img
                            src={img1}
                            alt="Laptop"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded-lg">
                            Laptop
                        </div>
                    </div>

                    {/* Product Image 2 */}
                    <div className="relative group">
                        <img
                            src={img2}
                            alt="Monitor"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded-lg">
                            Monitor
                        </div>
                    </div>

                    {/* Product Image 3 */}
                    <div className="relative group">
                        <img
                            src={img3}
                            alt="Desktop"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded-lg">
                            Desktop
                        </div>
                    </div>

                    {/* Product Image 4 */}
                    <div className="relative group">
                        <img
                            src={img4}
                            alt="Keyboard"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded-lg">
                            Keyboard
                        </div>
                    </div>

                    {/* Product Image 5 */}
                    <div className="relative group">
                        <img
                            src={img5}
                            alt="Mouse"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded-lg">
                            Mouse
                        </div>
                    </div>

                    {/* Product Image 6 */}
                    <div className="relative group">
                        <img
                            src={img6}
                            alt="Headphones"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded-lg">
                            Headphones
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ImageSection;
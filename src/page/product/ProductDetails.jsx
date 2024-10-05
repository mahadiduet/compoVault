import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    const { title, details, level, ratings, lession, student, duration, price, assessments, author, author_img_url, img_url, } = product;
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-red-100 to-blue-100 p-8 flex justify-center items-center">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">

                {/* Image Section */}
                <div className="flex justify-center items-center bg-blue-200 p-4">
                    <img
                        src={img_url}
                        alt={title}
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Details Section */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-black mb-4">{title}</h1>
                    <p className="text-gray-700 mb-6">{details}</p>

                    {/* Author Section */}
                    <div className="flex items-center mb-4">
                        <img
                            src={author_img_url}
                            alt={author}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-red-800">{author}</h3>
                        </div>
                    </div>

                    {/* Course Information */}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                        <p><strong className="text-blue-800">Level:</strong> {level}</p>
                        <p><strong className="text-blue-800">Ratings:</strong> {ratings}</p>
                        <p><strong className="text-blue-800">Lessons:</strong> {lession}</p>
                        <p><strong className="text-blue-800">Students:</strong> {student}</p>
                        <p><strong className="text-blue-800">Duration:</strong> {duration}</p>
                        <p><strong className="text-blue-800">Assessments:</strong> {assessments}</p>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-900">Price: {price} Tk</span>
                        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
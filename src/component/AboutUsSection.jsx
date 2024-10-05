import image from './../../public/images/1 (13).jpg';

const AboutUsSection = () => {
    return (
        <div className="bg-blue-400 py-12">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">About Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Owner Image */}
                    <div className="text-center">
                        <img
                            src={image}
                            alt="Owner"
                            className="w-48 h-48 rounded-full mx-auto border-4 border-blue-200"
                        />
                    </div>

                    {/* Owner Details */}
                    <div>
                        <h3 className="text-3xl font-semibold text-blue-900">Md. Emam Mahadi</h3>
                        <p className="text-deep mt-4 text-lg leading-relaxed">
                            Welcome to CompuVault, where we offer the best computer devices and accessories.
                            With years of experience in technology and customer service, I strive to ensure that
                            every customer finds exactly what they need to excel in their personal or professional
                            computing experience.
                        </p>
                        <p className="text-deep mt-4 text-lg leading-relaxed">
                            Our mission is to provide top-quality products at affordable prices, along with
                            exceptional support to help our customers make informed choices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;

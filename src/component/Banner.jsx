const Banner = () => {
    return (
        <div
            className="bg-cover bg-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://i.ibb.co.com/jzmdpdy/Banner.jpg')" }}
        >
            <div className="bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-lg text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900">
                    Welcome to CompoVault
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-900">
                    Your one-stop shop for all computer devices!
                </p>
            </div>
        </div>
    );
};

export default Banner;

const FinanceSection = () => {
  return (
    <section className="w-9/12 mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-[#FFFFFF] relative">
      {/* Text Section */}
      <div className="md:w-1/2 w-full md:pl-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          POWERING THE FUTURE OF FINANCE
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Uncovering new ways to delight customers
        </p>
        <p className="text-md text-gray-600 mb-6">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-md text-gray-600">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Background Image Section */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 relative">
        <img
          src="https://i.postimg.cc/ryhjsyg2/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.avif"
          alt="Finance Technology"
          className="w-9/12 object-cover shadow-lg"
        />

        {/* Front Images */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
          <div className="w-20 h-20 bg-blue-500 rounded-full shadow-xl animate-bounce"></div>
          <div className="w-20 h-20 bg-green-500 rounded-full shadow-xl animate-bounce"></div>
          <div className="w-20 h-20 bg-red-500 rounded-full shadow-xl animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;

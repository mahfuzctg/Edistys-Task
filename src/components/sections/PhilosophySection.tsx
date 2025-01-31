const OurPhilosophy = () => {
  return (
    <section className="w-full bg-white  py-16">
      <div className="container mx-auto text-center px-6">
        <p className=" font-bold text-blue-600 mb-4">OUR PHILOSOPHY</p>
        <h1 className="text-5xl font-bold text-gray-600 mb-8">
          Human-centred innovation
        </h1>
        <div
          className="h-80 bg-white bg-transparent bg-cover bg-no-repeat bg-center rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.postimg.cc/CLShW7Tm/Philosophy.png")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default OurPhilosophy;

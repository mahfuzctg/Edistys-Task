const OurPhilosophy = () => {
  return (
    <section className="w-full bg-white  py-24">
      <div className="container mx-auto text-center px-6">
        <p className="font-bold text-blue-500 py-4">OUR PHILOSOPHY</p>
        <h1 className="text-3xl md:text-6xl font-bold text-[#0B305B] py-8">
          Human-centred innovation
        </h1>
        <div
          className="h-80 bg-white bg-transparent bg-cover bg-no-repeat bg-center rounded-2xl"
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

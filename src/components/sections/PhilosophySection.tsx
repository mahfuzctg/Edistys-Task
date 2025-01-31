import Heading from "../reUsable/heading/heading";

const OurPhilosophy = () => {
  return (
    <section className="w-full bg-white  py-16">
      <div className="container mx-auto text-center px-6">
        <Heading
          title="OUR PHILOSOPHY"
          subtitle="Human-centred innovation"
          center={false}
        />
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

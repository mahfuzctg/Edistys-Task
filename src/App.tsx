import { Outlet } from "react-router-dom";
import TechFinCards from "./components/reUsable/cards/TechFinCards";
import OurPhilosophy from "./components/sections/PhilosophySection";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <OurPhilosophy></OurPhilosophy>
      <TechFinCards></TechFinCards>
      <Footer />
    </div>
  );
};

export default App;

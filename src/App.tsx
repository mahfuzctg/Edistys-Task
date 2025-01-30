import { Outlet } from "react-router-dom";
import OurPhilosophy from "./components/sections/Philosophy.Section";
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
      <Footer />
    </div>
  );
};

export default App;

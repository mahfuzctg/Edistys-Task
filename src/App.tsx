import { Outlet } from "react-router-dom";

import TransformSection from "./components/sections/home/TransformSection";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <TransformSection></TransformSection>
      <Footer />
    </div>
  );
};

export default App;

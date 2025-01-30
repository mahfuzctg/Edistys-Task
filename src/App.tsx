import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;

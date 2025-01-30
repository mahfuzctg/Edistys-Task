import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 text-white text-center p-4">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops!😭 Page Not Found</h2>
      <p className="text-lg mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center space-x-2 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;

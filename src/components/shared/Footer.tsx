const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm">
              We are committed to delivering the best solutions for your
              business. Our expertise ensures top-notch results tailored to your
              needs.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@example.com"
                className="hover:text-green-400 transition-colors duration-200"
              >
                support@example.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="hover:text-green-400 transition-colors duration-200"
              >
                +1 (234) 567-89
              </a>
            </p>
            <p className="text-sm">Address: 123 Business Lane, Tech City</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Edistys. All rights reserved.
          </p>
          <p className="text-sm">
            <a
              href="/privacy-policy"
              className="hover:text-green-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/terms-of-service"
              className="hover:text-green-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

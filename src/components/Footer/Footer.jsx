import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#26202e] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1 */}
            <div>
              <p className="text-white-300 mt-2">
                Learn more about our mission and values.
              </p>
              <a
                href="#"
                className="text-red-400 hover:underline mt-2 inline-block"
              >
                See Details
              </a>
            </div>

            {/* Column 2 */}
            <div>
              <p className="text-white-300 mt-2">
                Discover the services we offer to help you.
              </p>
              <a
                href="#"
                className="text-red-400 hover:underline mt-2 inline-block"
              >
                Explore
              </a>
            </div>

            {/* Column 3 */}
            <div>
              <p className="text-white-300 mt-2">
                Get in touch with our support team.
              </p>
              <a
                href="#"
                className="text-red-400 hover:underline mt-2 inline-block"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

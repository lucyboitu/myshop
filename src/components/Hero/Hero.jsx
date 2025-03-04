import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-bg.jpg"; // Add your background image

const Hero = () => {
  return (
    <section className="flex h-[800px]">
      {/* Left Column */}
      <div className="w-1/3 bg-red-600 flex flex-col justify-center items-center text-white p-10">
        <h2 className="text-3xl font-bold mb-4">MyShop</h2>
        <h1 className="font-montserrat text-6xl font-extrabold uppercase leading-tight text-center">
          Up to 50% off Seasonal Clearance Sale
        </h1>
        <p className="text-center text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-200 transition">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Right Column */}
      <div
        className="w-2/3 bg-cover bg-top"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
    </section>
  );
};

export default Hero;

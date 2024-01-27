import image from "../assets/images/hero.jpg";
const HeroSection = () => {
  return (
    <div className="relative bg-black text-white">
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Your Path to Senior Developer and Beyond
        </h1>
        <p className="mt-4 text-xl">
          200+ In-Depth Frontend & Fullstack Courses
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#courses"
            className="text-base font-medium rounded-md bg-orange-500 text-white py-3 px-6 hover:bg-orange-600 transition duration-150"
          >
            Browse Our Courses
          </a>
          <a
            href="#learning-paths"
            className="text-base font-medium rounded-md bg-transparent border border-white text-white py-3 px-6 ml-4 hover:bg-white hover:text-black transition duration-150"
          >
            View Learning Paths
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

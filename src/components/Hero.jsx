import Carousel from "./Carousel";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const Hero = () => {
  const images = [img1, img2, img3, img4]; // Use imported images here

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, suscipit.
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Lorem ipsum dolor sit amet.{" "}
              <span className="relative inline-flex sm:inline">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30"></span>
                <span className="relative">Lorem</span>
              </span>
            </p>

            <div className="px-8 mt-9 sm:items-center sm:justify-center sm:px-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:ring-2 focus:ring-gray-900"
              >
                Support Us
              </a>
            </div>
            <p className="my-6 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <Carousel images={images} />
      </section>
    </div>
  );
};

export default Hero;

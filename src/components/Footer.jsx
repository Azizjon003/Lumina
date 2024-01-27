import logo from "../assets/react.svg"; // Import your logo as a React component
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <logo className="h-8 w-auto text-white" />
            <div className="mt-4 md:flex md:items-center md:space-x-6">
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Courses
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Learn
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Teachers
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Guides
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Blog
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                FAQ
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Login
              </a>
              <a href="#" className="block mt-2 md:mt-0 md:inline-block">
                Join Now
              </a>
            </div>
            <p className="mt-4">
              Frontend Masters is proudly made in Minneapolis, MN
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="flex justify-center space-x-6">
              <FaFacebook className="h-6 w-6" />
              <FaLinkedin className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              <AiFillApple className="h-8 w-8" />
              <AiFillAndroid className="h-8 w-8" />
            </div>
            <p className="mt-4 text-center">
              Contact: support@frontendmasters.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p>© 2024 Frontend Masters - Terms of Service - Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

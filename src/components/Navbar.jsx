const Navbar = () => {
  return (
    <>
      <nav className="bg-[#37140f] shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-[#aaa] text-lg">
                    Frontend<span className="text-[#aaa]">Masters</span>
                  </span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-4 px-2 text-[#aaa] font-semibold hover:text-[#highlight-color] transition duration-300"
                >
                  Courses
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-[#aaa] font-semibold hover:text-[#highlight-color] transition duration-300"
                >
                  Learn
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-[#aaa] font-semibold hover:text-[#highlight-color] transition duration-300"
                >
                  Workshops
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-[#aaa] font-semibold hover:text-[#highlight-color] transition duration-300"
                >
                  Blog
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3 ">
              <a
                href="#"
                className="py-2 px-2 font-medium text-[#aaa] rounded hover:bg-[#highlight-color] transition duration-300"
              >
                Join Now
              </a>
              <a
                href="#"
                className="py-2 px-2 font-medium text-[#aaa] rounded hover:bg-[#highlight-color] transition duration-300"
              >
                Login
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-[#aaa] hover:text-[#highlight-color]"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden mobile-menu">
          <ul className="">
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-[#aaa] bg-[#highlight-color] transition duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-[#aaa] hover:bg-[#highlight-color] transition duration-300"
              >
                Learn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-[#aaa] hover:bg-[#highlight-color] transition duration-300"
              >
                Workshops
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-[#aaa] hover:bg-[#highlight-color] transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

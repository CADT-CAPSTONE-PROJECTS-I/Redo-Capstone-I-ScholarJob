import {
  React,
  ScholarJobLogoWhite,
  Link,
  Icon,
} from "../import/all_import.jsx";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white py-12 px-16">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-6">
          <Link to="/home" className="flex items-center space-x-3">
            <img
              src={ScholarJobLogoWhite}
              className="h-10"
              alt="ScholarJob Logo"
            />
            <span className="font-bebas self-center text-3xl whitespace-nowrap font-bold bg-gradient-to-t mt-1 from-white/50 to-gray-200/80 bg-clip-text text-transparent">ScholarJob</span>
          </Link>
          <p className="mt-4 max-w-xs">
            If you would like to learn more about our programs or have any
            questions, please do not hesitate to contact us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Explore</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-customTeal-dark">
                   Home
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-customTeal-dark">
                  Career
                </a>
              </li>
              <li>
                <a href="/scholarship" className="hover:text-customTeal-dark">
                  Scholarship
                </a>
              </li>
              <li>
                <a href="/generate" className="hover:text-customTeal-dark">
                  CV Generation
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Resources</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customTeal-dark">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="input-group flex flex-col items-center">
          <div className="flex flex-1">
            <Icon
              icon={"ic:twotone-email"}
              className="text-white m-1"
            />
            <p className="text-sm font-bold">
              Stay up to date on the latest from ScholarJob
            </p>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="input-group__input w-full border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200 text-white placeholder-white"
            required
          />
          <button
            type="bottom"
            onClick={() => {
              navigate("/register");
            }}
            className=" mt-4 text-white py-3 px-9 rounded-md bg-customTeal text-sm hover:bg-customTeal-dark "
          >
            SIGN UP
          </button>
        </div>
      </div>

      <div className="text-center mt-16 text-white">
        © 2024 ScholarJob. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

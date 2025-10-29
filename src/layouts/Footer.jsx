import logo from "../assets/images/logo-white.png";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-webprimary text-white space-top">
      <div className="container">

        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Logo and Description */}
            <div className="md:w-1/4 flex flex-col items-start">
              <img src={logo} alt="Zeniverse Ventures" className="h-20 mb-6" />
              <p className="text-white text-base">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* About Links */}
            <div className="md:w-1/4">
              <h4 className="text-white font-semibold text-xl mb-4">About</h4>
              <ul className="text-white space-y-3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About US</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="md:w-1/4">
              <h4 className="text-white font-semibold text-xl mb-4">Quick Links</h4>
              <ul className="text-white space-y-3">
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-use">Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Term & Conditions</Link>
                </li>
              </ul>
            </div>
            {/* Social Links */}
            <div className="md:w-1/4">
              <h4 className="text-white font-semibold text-xl mb-4">Follow US</h4>
              <div className="flex items-center gap-7 text-white text-2xl">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Figma"><FiFigma /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="text-center bg-[#42779a] text-white py-4 text-sm font-semibold">
        ©{currentYear} zeniverse-ventures All Rights Reserved
      </div>
    </footer>
  );
}

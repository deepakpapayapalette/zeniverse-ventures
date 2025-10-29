import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../assets/images/logo.png";
import "../assets/styles/website/navbar.css";



import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);


  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = (dropdownName) => setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);

  const [activeUrl, setActiveUrl] = useState(false);



  const navLinksData = [
    { name: "Home", href: "/" },
    {
      name: "About Us", href: "/about",
      // dropdownKey: "about",  hasDropdown: true, dropdown: <AboutDropdown />
    },
    { name: "Service", href: "/services" },

    { name: "Contact Us", href: "/contact" },

  ];


  const linkClass = ({ isActive }) =>
    `text-gray-700 hover:text-webprimary block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${isActive ? 'active' : ''
    }`;

  const staticLinkClass = "block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200";

  return (
    <nav className="sticky top-0 bg-white shadow-sm border-b border-gray-200 z-[1001] flex items-center ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative py-4">
          {/* Logo */}
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="max-w-[130px] h-auto" />
          </NavLink>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 relative">
            {navLinksData.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className=" drop-parent "
                  onMouseEnter={() => setActiveDropdown(link.dropdownKey)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* <NavLink
                    to={
                      link.href
                    }
                    className={({ isActive }) =>
                      `${staticLinkClass} navlink-disabled flex items-end gap-1 text-gray-700
                        ${isActive || location.pathname.startsWith(`${link.dropdownKey}`)
                        ? "active "
                        : ""
                      }`
                    }
                    onClick={() => toggleDropdown(link.dropdownKey)}
                  >
                    {link.name}
                    <MdKeyboardArrowDown className="text-gray-700" />
                  </NavLink> */}
                  <NavLink
                    to={link.href !== "#" ? link.href : location.pathname} // prevent '#' routes
                    className={({ isActive }) =>
                      `${staticLinkClass} navlink-disabled flex items-end gap-1 text-gray-700 ${
                      // Only apply 'active' for non-dropdown routes
                      !link.hasDropdown && isActive ? "active" : ""
                      }`
                    }
                    onClick={() => toggleDropdown(link.dropdownKey)}
                  >
                    {link.name}
                    <MdKeyboardArrowDown className="text-gray-700" />
                  </NavLink>

                  {activeDropdown === link.dropdownKey && (
                    <div className="lg:fixed absolute top-18 left-0 bg-white w-[100%] shadow-sm z-50  sub-dropdown">
                      {link.dropdown}
                    </div>
                  )}
                </div>

              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* ===== Desktop CTA ===== */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <button className="min-w-[90px] theme-btn-fill" style={{ fontSize: '16px', paddingBlock: '9px' }}>Get In Touch</button>
            </Link>
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-[73px] right-0 bg-white w-4/5 h-[calc(100vh-73px)] overflow-auto border-gray-200 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-2 pt-8 pb-3 space-y-1 flex flex-col items-start">
            {navLinksData.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="">
                  {/* Dropdown main button */}
                  <button
                    onClick={() => toggleDropdown(link.dropdownKey)}
                    className={`${staticLinkClass} flex items-center justify-start gap-1 w-full text-webPara hover:text-webprimary transition-colors duration-200 text-md`}
                  >
                    {link.name}
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-300 ${activeDropdown === link.dropdownKey ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown links */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${activeDropdown === link.dropdownKey ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}

                  >
                    <div className=" w-full  text-left" onClick={closeMenu}>
                      {link.dropdown}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              )
            )}

            {/* Mobile CTA */}
            <div className="flex flex-col  gap-4  w-full pt-6">
              <Link to="/contact">
                <button
                  className="theme-btn-fill w-full font-medium transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div >
    </nav >
  );
};

export default Navbar;

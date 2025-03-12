import { useEffect, useState } from "react";
import logo from "../assets/Logo_circle.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa6";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Определение, является ли устройство мобильным или планшетом
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // 768px — стандартная ширина для планшетов
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined" && !isOpen) {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("resize", checkIsMobile);
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, isOpen]);

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-20 right-20 flex items-center justify-between py-6 z-50 transition-transform duration-300 ${
          showNavbar || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/khusan-khujakeldiev-1224b5294"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Khusan-Khujakeldiev" target="_blank">
            <FaGithub />
          </a>
          <a href="https://t.me/PalmaGo" target="_blank">
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/poletnagrizly?igsh=MWd0ZGpjdDMwNXVsdA%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        {/* Бургер-меню отображается только на мобильных и планшетах */}
        {isMobile && (
          <div
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            id="mobile-menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </nav>
      {/* Меню отображается только на мобильных и планшетах */}
      {isMobile && (
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <a
            href="https://www.linkedin.com/in/khusan-khujakeldiev-1224b5294"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Khusan-Khujakeldiev" target="_blank">
            <FaGithub />
          </a>
          <a href="https://t.me/PalmaGo" target="_blank">
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/poletnagrizly?igsh=MWd0ZGpjdDMwNXVsdA%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
      : "bg-transparent py-6"
  }`;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-pastel-900 hover:text-pastel-600 transition-colors"
        >
          <ShieldCheck size={28} className="text-pastel-600" />
          <span className="text-xl font-bold tracking-wider">FOXASSURED</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-pastel-600 font-bold"
                : "text-gray-600 hover:text-pastel-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`text-sm font-medium transition-colors ${
              isActive("/portfolio")
                ? "text-pastel-600 font-bold"
                : "text-gray-600 hover:text-pastel-600"
            }`}
          >
            Portfolio & Services
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pastel-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col p-6 space-y-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-pastel-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-600 hover:text-pastel-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio & Services
            </Link>
            <Link
              to="/education"
              className="text-gray-600 hover:text-pastel-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Education
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

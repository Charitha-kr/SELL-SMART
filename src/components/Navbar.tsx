
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-softsell-600 to-softsell-800 text-white text-xl font-bold p-2 rounded">
                SS
              </div>
              <span className="text-xl font-heading font-semibold text-softsell-800 dark:text-white">
                SoftSell
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-softsell-700 dark:text-softsell-300 hover:text-softsell-500 transition-colors">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-softsell-700 dark:text-softsell-300 hover:text-softsell-500 transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-softsell-700 dark:text-softsell-300 hover:text-softsell-500 transition-colors">
              Testimonials
            </a>
            <ThemeToggle />
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={toggleMenu} className="text-softsell-800 dark:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 absolute left-0 right-0 top-[72px] shadow-md animate-fade-in">
            <div className="flex flex-col space-y-4 px-6 py-6">
              <a
                href="#how-it-works"
                className="text-softsell-700 dark:text-softsell-300 hover:text-softsell-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#why-choose-us"
                className="text-softsell-700 dark:text-softsell-300 hover:text-softsell-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                className="text-softsell-700 dark:text-softsell-300 hover:text-softsell-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

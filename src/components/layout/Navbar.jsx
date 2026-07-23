import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import { siteConfig } from "../../config/config";
import Button from "../ui/Button";

const primaryNav = [
  { label: "Rólam", to: "/rolam" },
  { label: "Termékek", to: "/termekek" },
  { label: "Csomagok", to: "/csomagok" },
  { label: "Blog", to: "/blog" },
];

const moreNav = [
  { label: "Sikertörténetek", to: "/sikertortenetek" },
  { label: "Platinum Team", to: "/platinum-team" },
  { label: "Kapcsolat", to: "/kapcsolat" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsOpen(false);
  const { brand, distributor } = siteConfig;

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-brand-700" : "text-gray-600 hover:text-brand-700"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center shrink-0" onClick={closeMenu}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-11 md:h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {primaryNav.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
              >
                Több
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 mt-2 w-52 py-2 bg-white rounded-2xl shadow-xl border border-gray-100"
                  >
                    {moreNav.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                              ? "text-brand-700 bg-brand-50"
                              : "text-gray-600 hover:text-brand-700 hover:bg-brand-50/50"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button to="/login" variant="ghost" size="sm" icon={LogIn} iconPosition="left">
              Belépés tagoknak
            </Button>
            <Button to="/platinum-team" variant="primary" size="sm">
              Csatlakozz
            </Button>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-b border-gray-100 overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-1">
              {siteConfig.navigation.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl font-medium transition-colors ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 space-y-3 px-4">
                <Button
                  to="/login"
                  variant="outline"
                  size="md"
                  className="w-full"
                  icon={LogIn}
                  iconPosition="left"
                  onClick={closeMenu}
                >
                  Belépés tagoknak
                </Button>
                <Button
                  to="/platinum-team"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Csatlakozz a {distributor.teamName}-hez
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

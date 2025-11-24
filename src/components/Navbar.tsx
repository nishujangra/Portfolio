import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { name: "/home/nishant", to: "/" },
    { name: "~/projects", to: "/projects" },
    { name: "~/blogs", to: "/blogs" },
    { name: "~/contact", to: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-space-950/97 backdrop-blur-lg border-b border-space-800 font-mono shadow-md">
      <div className="mx-auto px-6 py-5 flex justify-between items-center">

        {/* Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl flex items-center gap-2 tracking-widest"
        >
          <span className="text-terminal-blue">nishant@portfolio:</span>
          <span className="text-cyber-400">~</span>
          <span className="text-terminal-orange animate-pulse">$</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-base md:text-lg">
          {links.map((l, i) => (
            <motion.li
              key={l.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={l.to}
                className={`px-3 py-1 rounded-md transition-all duration-200 ease-in-out ${
                  pathname === l.to
                    ? "bg-space-800 text-neon-400 border border-neon-400/40"
                    : "text-text-primary/80 hover:text-neon-400 hover:bg-space-800/50 hover:scale-105"
                }`}
              >
                {l.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu
                className="text-neon-400 hover:text-neon-300 transition-colors duration-200"
                size={26}
              />
            </SheetTrigger>

            <SheetContent className="bg-space-900 border-l border-space-800 text-text-primary font-mono p-6">
              <SheetHeader>
                <div className="text-terminal-green text-lg flex items-center gap-2 mt-4">
                  <span>nishant@portfolio:</span>
                  <span className="text-cyber-400">~</span>
                  <span className="text-terminal-orange animate-pulse">$</span>
                </div>
              </SheetHeader>

              <div className="flex flex-col space-y-3 mt-6">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`px-3 py-2 rounded-md text-base transition-all duration-200 ${
                      pathname === l.to
                        ? "bg-space-800 text-neon-400 border border-neon-400/40"
                        : "text-text-primary/80 hover:text-neon-400 hover:bg-space-800/50 hover:scale-[1.03]"
                    }`}
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

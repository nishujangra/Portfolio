import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const links = [
    { name: "/home/nishant", to: "/" },
    { name: "~/projects", to: "/projects" },
    { name: "~/blogs", to: "/blogs" },
    { name: "~/contact", to: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-lg border-b border-border-muted font-mono shadow-md">
      <div className="mx-auto px-6 py-5 flex justify-between items-center">

        {/* Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl flex items-center gap-2 tracking-widest"
        >
          <span
            className="text-text-accent cursor-pointer"
            onClick={() => navigate("/")}
          >
            nishant@portfolio:
          </span>
          <span className="text-text-secondary">~</span>
          <span className="text-text-warning animate-pulse">$</span>
        </motion.div>

        {/* Desktop Nav */}
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
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  pathname === l.to
                    ? "bg-bg-secondary text-highlight border border-highlight/40"
                    : "text-text-primary/80 hover:text-highlight hover:bg-bg-secondary/50 hover:scale-105"
                }`}
              >
                {l.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-highlight hover:opacity-80 transition">
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </SheetTrigger>

            <SheetContent className="bg-bg-primary border-l border-border-muted text-text-primary font-mono p-6">
              <SheetHeader>
                <div className="text-lg flex items-center gap-2 mt-4">
                  <span className="text-text-primary">nishant@portfolio:</span>
                  <span className="text-text-secondary">~</span>
                  <span className="text-text-warning animate-pulse">$</span>
                </div>
              </SheetHeader>

              <div className="flex flex-col space-y-3 mt-6">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2 rounded-md text-base transition ${
                      pathname === l.to
                        ? "bg-bg-secondary text-highlight border border-highlight/40"
                        : "text-text-primary/80 hover:text-highlight hover:bg-bg-secondary/50 hover:scale-[1.03]"
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

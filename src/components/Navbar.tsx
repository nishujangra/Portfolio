import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Terminal } from "lucide-react";

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
            <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Terminal className="text-gold" size={20} />
                <h1 className="text-lg font-mono text-white">
                    <Link to="/" className="hover:text-gold transition-colors">
                        nishant@portfolio:~$
                    </Link>
                </h1>
            </motion.div>
            
            <ul className="hidden md:flex space-x-1">
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        to="/"
                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                            pathname === "/" 
                                ? "text-gold bg-gold/10" 
                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                        }`}
                    >
                        /home/nishant
                    </Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        to="/projects"
                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                            pathname === "/projects" 
                                ? "text-gold bg-gold/10" 
                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                        }`}
                    >
                        ~/projects
                    </Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/blogs"
                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                            pathname === "/blogs" 
                                ? "text-gold bg-gold/10" 
                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                        }`}
                    >
                        ~/blogs
                    </Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/contact"
                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                            pathname === "/contact" 
                                ? "text-gold bg-gold/10" 
                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                        }`}
                    >
                        ~/contact
                    </Link>
                </motion.li>
            </ul>

            <div className="flex md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu size={24} className="text-white cursor-pointer hover:text-gold transition-colors" />
                    </SheetTrigger>
                    <SheetContent className="bg-gray-900 border-l border-gray-800">
                        <SheetHeader>
                            <SheetTitle className="text-gold flex items-center space-x-2 font-mono">
                                <Terminal size={18} />
                                <span>nishant@portfolio:~$</span>
                            </SheetTitle>
                            <SheetDescription className="text-gray-400">
                                <div className="flex flex-col space-y-2 mt-6">
                                    <Link
                                        to="/"
                                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                                            pathname === "/" 
                                                ? "text-gold bg-gold/10" 
                                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                                        }`}
                                    >
                                        /home
                                    </Link>
                                    <Link
                                        to="/projects"
                                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                                            pathname === "/projects" 
                                                ? "text-gold bg-gold/10" 
                                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                                        }`}
                                    >
                                        ~/projects
                                    </Link>
                                    <Link
                                        to="/blogs"
                                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                                            pathname === "/blogs" 
                                                ? "text-gold bg-gold/10" 
                                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                                        }`}
                                    >
                                        ~/blogs
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className={`px-3 py-2 text-sm font-mono transition-colors duration-200 rounded-md ${
                                            pathname === "/contact" 
                                                ? "text-gold bg-gold/10" 
                                                : "text-gray-400 hover:text-gold hover:bg-gray-800/30"
                                        }`}
                                    >
                                        ~/contact
                                    </Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default NavBar;

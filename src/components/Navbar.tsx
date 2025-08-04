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
import { Menu, Terminal, Home, FolderOpen, FileText, MessageSquare } from "lucide-react";

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
            <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Terminal className="text-gold" size={24} />
                <h1 className="text-xl font-bold text-white">
                    <Link to="/" className="hover:text-gold transition-colors">
                        nishant@portfolio:~$
                    </Link>
                </h1>
            </motion.div>
            
            <ul className="hidden md:flex space-x-6">
                <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                            pathname === "/" 
                                ? "bg-gold/20 text-gold border border-gold/30" 
                                : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                        }`}
                    >
                        <Home size={16} />
                        <span>/home</span>
                    </Link>
                </motion.li>
                <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/projects"
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                            pathname === "/projects" 
                                ? "bg-gold/20 text-gold border border-gold/30" 
                                : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                        }`}
                    >
                        <FolderOpen size={16} />
                        <span>~/dev/projects</span>
                    </Link>
                </motion.li>
                <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <Link
                        to="/blogs"
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                            pathname === "/blogs" 
                                ? "bg-gold/20 text-gold border border-gold/30" 
                                : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                        }`}
                    >
                        <FileText size={16} />
                        <span>~/docs/blogs</span>
                    </Link>
                </motion.li>
                <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Link
                        to="/contact"
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                            pathname === "/contact" 
                                ? "bg-gold/20 text-gold border border-gold/30" 
                                : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                        }`}
                    >
                        <MessageSquare size={16} />
                        <span>~/contact</span>
                    </Link>
                </motion.li>
            </ul>

            <div className="flex md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu size={24} className="text-white cursor-pointer hover:text-gold transition-colors" />
                    </SheetTrigger>
                    <SheetContent className="bg-gray-900 border-l border-gray-700">
                        <SheetHeader>
                            <SheetTitle className="text-gold flex items-center space-x-2">
                                <Terminal size={20} />
                                <span>nishant@portfolio:~$</span>
                            </SheetTitle>
                            <SheetDescription className="text-gray-400">
                                <div className="flex flex-col justify-between h-[80vh] mt-6">
                                    <ul className="flex flex-col space-y-2">
                                        <li>
                                            <Link
                                                to="/"
                                                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${
                                                    pathname === "/" 
                                                        ? "bg-gold/20 text-gold border border-gold/30" 
                                                        : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                                                }`}
                                            >
                                                <Home size={16} />
                                                <span>/home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/projects"
                                                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${
                                                    pathname === "/projects" 
                                                        ? "bg-gold/20 text-gold border border-gold/30" 
                                                        : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                                                }`}
                                            >
                                                <FolderOpen size={16} />
                                                <span>~/dev/projects</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blogs"
                                                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${
                                                    pathname === "/blogs" 
                                                        ? "bg-gold/20 text-gold border border-gold/30" 
                                                        : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                                                }`}
                                            >
                                                <FileText size={16} />
                                                <span>~/docs/blogs</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/contact"
                                                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${
                                                    pathname === "/contact" 
                                                        ? "bg-gold/20 text-gold border border-gold/30" 
                                                        : "text-gray-300 hover:text-gold hover:bg-gray-800/50"
                                                }`}
                                            >
                                                <MessageSquare size={16} />
                                                <span>~/contact</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="text-gray-500 text-xs border-t border-gray-700 pt-4">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Terminal size={12} />
                                            <span>© 2025 Nishant Jangra</span>
                                        </div>
                                        <div className="text-gray-600">
                                            Built with React & TypeScript
                                        </div>
                                    </div>
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

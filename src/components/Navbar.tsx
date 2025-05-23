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
import { Menu } from "lucide-react";

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-opacity-70 backdrop-blur-md sticky top-0 z-50">
            <motion.h1
                className="text-xl font-bold border-blue-500 border-b px-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Link to="/" className="hover:text-gray-400">
                    Nishant
                </Link>
            </motion.h1>
            <ul className="hidden md:flex space-x-2">
                <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <Link
                        to="/"
                        className={`px-2 hover:text-gray-400 hover:rounded-lg ${
                            pathname === "/" ? "text-gold" : ""
                        }`}
                    >
                        &lt;Home/&gt;
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
                        className={`px-2 hover:text-gray-400 hover:rounded-lg ${
                            pathname === "/projects" ? "text-gold" : ""
                        }`}
                    >
                        &lt;Projects/&gt;
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
                        className={`px-2 hover:text-gray-400 hover:rounded-lg ${
                            pathname === "/blogs" ? "text-gold" : ""
                        }`}
                    >
                        &lt;Blogs/&gt;
                    </Link>
                </motion.li>
                {/* <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Link
                        to="/services"
                        className={`hover:text-gray-400 ${
                            pathname === "/services" ? "text-gold" : ""
                        }`}
                    >
                        &lt;Services/&gt;
                    </Link>
                </motion.li> */}
                <motion.li
                    className="text-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <Link
                        to="/contact"
                        className={`px-2 hover:text-gray-400 hover:rounded-lg ${
                            pathname === "/contact" ? "text-gold" : ""
                        }`}
                    >
                        &lt;Contact/&gt;
                    </Link>
                </motion.li>
            </ul>

            <div className="flex md:hidden space-x-6">
                <Sheet>
                    <SheetTrigger>
                        <Menu size={24} className="text-white cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col justify-between h-[80vh]">
                                    <ul className="flex flex-col h-full text-text items-center justify-center space-y-4">
                                        <li className="text-sm">
                                            <a
                                                href="/"
                                                className={`hover:text-gray-400`}
                                            >
                                                &lt;Home/&gt;
                                            </a>
                                        </li>
                                        <li className="text-sm">
                                            <a
                                                href="/projects"
                                                className={`hover:text-gray-400`}
                                            >
                                                &lt;Projects/&gt;
                                            </a>
                                        </li>
                                        <li className="text-sm">
                                            <a
                                                href="/blogs"
                                                className={`hover:text-gray-400`}
                                            >
                                                &lt;Blogs/&gt;
                                            </a>
                                        </li>
                                        {/* <li className="text-sm">
                                            <Link
                                                to="/services"
                                                className={`hover:text-gray-400`}
                                            >
                                                &lt;Services/&gt;
                                            </Link>
                                        </li> */}
                                        <li className="text-sm">
                                            <a
                                                href="/contact"
                                                className={`hover:text-gray-400`}
                                            >
                                                &lt;Contact/&gt;
                                            </a>
                                        </li>
                                    </ul>
                                    <div>
                                        © 2025 Nishujangra27 | Built with React
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

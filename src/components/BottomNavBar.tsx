import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
    const { pathname } = useLocation();

    return (
        <div className="w-[80%] bg-black bg-opacity-30 backdrop-filter backdrop-blur-md p-4 pt-5 rounded-tl-full rounded-tr-full flex justify-center items-center">
            <ul className="flex w-full flex-row px-2 justify-evenly font-semibold text-sm">
                <li className={`${pathname === '/' && 'text-gold border-b-2 border-b-gold'} px-1`}>
                    <Link to="/">About Me</Link>
                </li>
                <li className={`${pathname == '/resume' && 'text-gold border-b-2 border-b-gold'} px-1`}>
                    <Link to="/resume">Resume</Link>
                </li>
                <li className={`${pathname == '/portfolio' && 'text-gold border-b-2 border-b-gold'} px-1`}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={`${pathname == '/services' && 'text-gold border-b-2 border-b-gold'} px-1`}>
                    <Link to="/services">Services</Link>
                </li>
                <li className={`${pathname == '/contact' && 'text-gold border-b-2 border-b-gold'} px-1`}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default BottomNavBar

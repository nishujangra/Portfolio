import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <div className="bg-nav-bg w-4/5 relative left-[20%] p-6 rounded-bl-xl rounded-tr-xl hidden md:flex">
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

export default NavBar

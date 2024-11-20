import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <div className="bg-nav-bg w-2/3 relative left-1/3 p-6 rounded-bl-xl rounded-tr-xl">
            <ul className="flex flex-row px-5 justify-between font-semibold text-lg">
                <li className={`${pathname === '/' && 'text-gold'}`}>
                    <Link to="/">About Me</Link>
                </li>
                <li className={`${pathname == '/resume' && 'text-gold'}`}>
                    <Link to="/resume">Resume</Link>
                </li>
                <li className={`${pathname == '/portfolio' && 'text-gold'}`}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={`${pathname == '/services' && 'text-gold'}`}>
                    <Link to="/services">Services</Link>
                </li>
                <li className={`${pathname == '/contact' && 'text-gold'}`}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar

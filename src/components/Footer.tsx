import { Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-xs md:text-lg text-center text-white py-6 transition duration-300 hover:bg-gray-700">
            <p className="mb-2">©2025 Nishujangra27</p>
            <p className="text-sm">
                Built with {" "}
                {/* <span className="font-bold">Golang</span> &{" "} */}
                <span className="font-bold">React</span>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
                <a
                    href="https://github.com/nishujangra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <img
                        src="/assets/icons/git.svg"
                        alt="github"
                        className="w-6 h-6" 
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/nishujangra27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <Linkedin   
                        size={24}
                        color="#fff"
                     />
                </a>
                <a
                    href="https://x.com/nishujangra27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <img
                        src="/assets/icons/x.svg"
                        alt="instagram"
                        className="w-6 h-6"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

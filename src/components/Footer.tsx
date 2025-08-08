import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900/50 border-t border-gray-700 py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gold mb-3">Nishant</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Backend Engineer passionate about building secure APIs and distributed systems. 
                            Top 11.8% in METI Japan IT Contest 2025.
                        </p>
                    </div>


                    {/* Contact & Support */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold text-gold mb-3">Connect & Support</h3>
                        <div className="space-y-2">
                            <a 
                                href="mailto:ndjangra1027@example.com"
                                className="block text-gray-400 hover:text-gold transition-colors text-sm"
                            >
                                ndjangra1027@gmail.com
                            </a>
                            <a 
                                href="https://buymeacoffee.com/nishujangra27"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-400 hover:text-gold transition-colors text-sm"
                            >
                                Buy Me a Coffee
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a
                        href="https://github.com/nishujangra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gold transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nishujangra27/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gold transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://x.com/nishujangra27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gold transition-colors duration-200"
                        aria-label="Twitter"
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href="mailto:ndjangra1027@example.com"
                        className="text-gray-400 hover:text-gold transition-colors duration-200"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400 text-sm mb-2">
                        © 2025 Nishant. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs">
                        Built with <span className="text-gold font-semibold">React</span> & <span className="text-gold font-semibold">TypeScript</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
